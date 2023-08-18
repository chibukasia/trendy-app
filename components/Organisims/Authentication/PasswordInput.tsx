import { View, Text, ActivityIndicator, BackHandler } from "react-native";
import BaseInput from "../../Atoms/Inputs/BaseInput";
import { useEffect, useReducer } from "react";
import { makeStyles, useTheme } from "@rneui/themed";
import WithHelperText from "../../Atoms/Inputs/WithHelperText";
import { isValidPassword } from "../../../utils";
import { Icon } from "@rneui/base";
import { Link, router, useRouter } from "expo-router";
import ActionButton from "../../Atoms/Buttons/ActionButton";
import useUserAuth from "../../../hooks/useUserAuth";
import { useAppDispatch, useAppSelector } from "../../../store";
import { signUpOrLoginForm } from "../../../store/slices/authSlice";

const hasLowercase = (str: string) => /[a-z]/.test(str);
const hasUppercase = (str: string) => /[A-Z]/.test(str);
const hasNumber = (str: string) => /\d/.test(str);
const hasSpecialCharacter = (str: string) => /[@$!%*?&]/.test(str);

interface IReducerState {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  editable: boolean;
  showPassword: boolean;
  emailValid: boolean;
  passwordValid: boolean;
}

const initialState: IReducerState = {
  email: "someone@example.com",
  password: "",
  loading: false,
  error: "",
  showPassword: false,
  emailValid: false,
  passwordValid: false,
  editable: false,
};

const reducer = (state: IReducerState, action: any) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_EDITABLE":
        return{
            ...state,
            editable: action.payload
        };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "SET_SHOW_PASSWORD":
      return {
        ...state,
        showPassword: action.payload,
      };
    case "SET_EMAIL_VALID":
      return {
        ...state,
        emailValid: action.payload,
      };
    case "SET_PASSWORD_VALID":
      return {
        ...state,
        passwordValid: action.payload,
      };
    default:
      return state;
  }
};

const PasswordInput = () => {
  const styles = useStyles();
  const emailValue = useAppSelector( state => state.authSlice.email)
  const formState = useAppSelector( state => state.authSlice.formState)
  const dispatch = useAppDispatch()
  const {push} = useRouter()
  const [
    {
      password,
      passwordValid,
      loading,
      error,
      showPassword,
      editable,
    }, 
    dispatchAction] = useReducer(reducer, initialState)
  const { theme } = useTheme();

  const toggleShowPassword = () => {
    dispatchAction({ type: "SET_SHOW_PASSWORD", payload: !showPassword });
  };

  const setPassword = (value: string) => {
    dispatchAction({ type: "SET_PASSWORD", payload: value });
  };

  const enableEdit = ()=>{
    dispatchAction({type: 'SET_EDITABLE', payload: !editable})
  }
  const {isValid, errorMessage} = isValidPassword(password)
  
  const validatePassword = ()=>{
    dispatchAction({type: 'SET_PASSWORD_VALID', payload: isValid})
    dispatchAction({type: 'SET_ERROR', payload: errorMessage})
  }
  
  useEffect(() => {
    validatePassword()
  }, [password, isValid]);

  function handleBackButtonPress() {
    // Prevent the back button from navigating to the last screen in the stack
    return true;
  }
  const {loginUser, createAccount, emailVerification} = useUserAuth()

  const navigateAuth = ()=>{
    if(formState==='signup'){
      dispatch(signUpOrLoginForm({formState:'login'}))
        router.replace('/(auth)/login')
    }else{
      dispatch(signUpOrLoginForm({formState:'signup'}))
        router.replace('/(auth)/register')
    }
  }


  const handleContinue = async()=>{
    validatePassword();
    if(formState==='signup' && passwordValid){
        dispatchAction({ type: "SET_LOADING", payload: true });
        try {
          const errorMessage = await createAccount(emailValue,password);
          if(errorMessage){
            dispatchAction({ type: "SET_ERROR", payload: errorMessage })
          }else{
            emailVerification()
            push('/(auth)/email-verification');
          }
        } catch (error: any) {
          dispatchAction({ type: "SET_ERROR", payload: error.message })
        } finally{
          dispatchAction({ type: "SET_LOADING", payload: false });
        }  
    }else if(formState==='login' && passwordValid){
      dispatchAction({ type: "SET_LOADING", payload: true });
      try {
        const errorMessage = await loginUser(emailValue, password);
        if(errorMessage){
          dispatchAction({ type: "SET_ERROR", payload: errorMessage })
        }else{
          router.replace("/(tabs)");
          BackHandler.removeEventListener('hardwareBackPress', handleBackButtonPress);
        }
      } catch (error: any) {
        dispatchAction({ type: "SET_ERROR", payload: error.message })
      } finally{
        dispatchAction({ type: "SET_LOADING", payload: false });
      }
       // Solve bug here
    }else{
      router.push('/(tabs)')
    }
  }
  return (
    <View style={{gap: 10}}>
      <View>
        <Text style={styles.textStyles}>Email Address</Text>
        <BaseInput disabled={!editable} value={emailValue} 
            rightIcon={ formState==='signup'?{
                name: "edit",
                type: "feather",
                color: theme.colors.text,
                size: 18,
                onPress: enableEdit,
                style: {
                    display: "flex",
                    justifyContent: "center",
                },
                }: {}}
        />
      </View>
      <View>
        <Text style={styles.textStyles}>Password</Text>
        <WithHelperText
          rightIcon={{
            name: showPassword ? "eye-off" : "eye",
            type: "feather",
            color: theme.colors.text,
            size: 20,
            onPress: toggleShowPassword,
            style: {
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
            },
          }}
          secureTextEntry={showPassword}
          onChangeText={setPassword}
          helperText={formState==='signup'? (
            (password?.length > 0 && !passwordValid) ? <View style={styles.bottomHelperTextContainer}>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !(password.length >= 8) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !(password.length >= 8) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !(password.length >= 8) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least 8 characters long
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasNumber(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasNumber(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasNumber(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one number
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasLowercase(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasLowercase(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasLowercase(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one lowercase letter
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasUppercase(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasUppercase(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasUppercase(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one uppercase letter
                    </Text>
                </View>
                <View style={styles.bottomHelperTextContainerA} >
                    <Icon
                        name={ !hasSpecialCharacter(password) ? "exclamation" :  "check"}
                        type="font-awesome"
                        size={12}
                        color={ !hasSpecialCharacter(password) ? theme.colors.error : theme.colors.success}
                    />
                    <Text style={[styles.bottomHelperText,{
                        color: !hasSpecialCharacter(password) ? theme.colors.error : theme.colors.success
                    }]} >
                        At least one special character
                    </Text>
                </View>
            </View> : ""
          ): ''}
          />
          {error? <Text style={{color:theme.colors.error, marginVertical:5}}>{error}</Text> : null}
        {formState==='login' && <Link href={'/forgot-password'} style={{textAlign: 'right', color: theme.colors.grey3, }}>Forgot Password</Link>}
      </View>
      <View style={{paddingTop: 20}}>
        {loading ? <ActivityIndicator/> : <ActionButton fullWidth onPress={handleContinue}>Continue</ActionButton>}
        {formState === "signup" ? (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Already have an account?{" "}
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Log In</Text>
          </Text>
        ) : (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Don't have an account?{" "}
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Sign Up</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default PasswordInput;


const useStyles = makeStyles((theme)=>({
    bottomHelperTextContainer: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      borderWidth: 1, 
      marginVertical: 10, 
      borderRadius: 8, 
      padding: 5, 
      gap: 5, 
      borderColor: theme.colors.stroke1
    },
    bottomHelperTextContainerA: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 5,
    },
    bottomHelperText: {
        fontSize: 14,
        fontWeight: "400", 
        fontStyle: 'normal',
    },
    textStyles: {
        color: theme.colors.text,
        fontWeight: '600'
    }
}))

