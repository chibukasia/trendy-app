import React, { useEffect } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import ActionButton from '../../Atoms/Buttons/ActionButton';
import Divider from '../../Atoms/Divider/Divider';
import { makeStyles, useTheme } from '@rneui/themed';
import ImageIconButton from '../../Atoms/Buttons/ImageIconButon';
import { router, useRouter } from 'expo-router';
import { isValidEmail } from '../../../utils';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setEmailValue, signUpOrLoginForm } from '../../../store/slices/authSlice';

interface IProps{
  state?: 'signup' | 'login'
}
const AuthForm = (props: IProps) => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState<boolean>(true)
  const {theme} = useTheme();
  const styles = useStyles()
  const formState = useAppSelector( state => state.authSlice.formState)
  const dispatch = useAppDispatch()
  const {push} = useRouter()
  
  const {isValid, errorMessage} = isValidEmail(email)
  useEffect(() => {
    if(isValid){
      setIsEmailValid(true)
    }else{
      setError(errorMessage)
      setIsEmailValid(false)
    }
  }, [isValid, email]);

  const onContinueClick = ()=>{
    if(isValid){
      dispatch(setEmailValue({email}))
      push('/(auth)/password')
    }else{
      setError(errorMessage)
      setIsEmailValid(false)
    }
  }

  const onGoogleLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const onMicrosoftLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const onFacebookLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const onAppleLogin = ()=>{
    /**
     * @todo Implement login with google
     */
}
const navigateAuth = ()=>{
  if(formState==='signup'){
    dispatch(signUpOrLoginForm({formState:'login'}))
    router.replace('/(auth)/login')
  }else{
    dispatch(signUpOrLoginForm({formState:'signup'}))
    router.replace('/(auth)/register')

  }
}  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginStyles}>
        <View style={{paddingBottom: 25}}>
            <Text style={{fontWeight: '600',}}>Enter your Email</Text>
            <TextInput editable placeholder='someone@example.com' onChangeText={text => setEmail(text)} style={styles.textInputStyles} />
        </View>
        {email.length > 0 ? !isEmailValid ? <Text style={{color:"red", marginVertical:5}}>{error}</Text> : null: null}
        <View>
            <ActionButton onPress={onContinueClick} fullWidth>Continue</ActionButton>
            {formState === "signup" ? (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Already have an account?
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Log In</Text>
          </Text>
        ) : (
          <Text style={{ color: theme.colors.grey2, textAlign: "center" }}>
            Don't have an account?
            <Text style={{ color: theme.colors.primary }} onPress={navigateAuth}> Sign Up</Text>
          </Text>
        )}
        </View>
      </View>
      <View style={styles.divider}>
        <Divider>Or</Divider>
      </View>
      <View style={styles.socialLogins}>
        <ImageIconButton name='google' title='Continue With Google' onPress={onGoogleLogin}/>  
        <ImageIconButton name='microsoft' title='Continue With Microsoft' onPress={onMicrosoftLogin}/>  
        <ImageIconButton name='apple' title='Continue With Apple' onPress={onAppleLogin}/>  
        <ImageIconButton name='facebook' title='Continue With Facebook' onPress={onFacebookLogin}/>  
      </View>

    </ScrollView>
  )
}

export default AuthForm

const useStyles=makeStyles((theme, props)=>({
  container: {
    gap: 10
  },
  textInputStyles:{
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  textStyles:{
    textAlign: 'center', 
    paddingTop: 10, 
    color: theme.colors.stroke, 
    fontSize: 12
  },
  socialLogins: {
    gap: 10,
    paddingVertical: 20
  },
  loginStyles: {
    marginVertical: 20,
  },
  divider:{
    paddingVertical: 10
  }
}))