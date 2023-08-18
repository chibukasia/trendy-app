import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { makeStyles, useTheme } from "@rneui/themed";
import React, { useState } from "react";
import BaseInput from "../../components/Atoms/Inputs/BaseInput";
import Logo from "../../components/Atoms/Brand/Logo";
import { auth } from "../../firebase/firebaseApp";
import { PhoneAuthProvider, updatePhoneNumber } from "firebase/auth";
import { useRouter, useLocalSearchParams, router } from "expo-router";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";

const CodeVerification = () => {
  const styles = useStyles();
  const [verifying, setVerifying] = useState<boolean>(false);
  const [error, setError] = React.useState<string>("")
  const params = useLocalSearchParams();
  const {verificationId, phone} = params

  return (
    <ScrollView style={styles.container}>
      <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
        <Logo width={70} height={70} />
      </View>
      {verifying ? (
        <Verifying phone={phone} error={error}/>
      ) : (
        <CodeInput setVerifying={setVerifying} verificationId={verificationId} setError = {setError}/>
      )}
    </ScrollView>
  );
};

interface CodeInputProps {
  setVerifying: (verifying: boolean) => void;
  setError: (error: string) => void;
  verificationId:string | string[] | undefined
}
const CodeInput = (props: CodeInputProps) => {
  const { theme } = useTheme();
  const styles = useStyles();
  const [verificationCode, setVerificationCode] = React.useState<string>("");
  const {push} = useRouter()

  const handleContinueTap = async() => {
    try {
      props.setVerifying(true);
      const credential = PhoneAuthProvider.credential(
        props.verificationId as string,
        verificationCode
      );
      auth?.currentUser &&
      updatePhoneNumber(auth?.currentUser, credential)
        .then(() => {
          push("/(auth)/welcome");
        })
        .catch(function (error) {
          if(error.message === "Firebase: Error (auth/invalid-verification-code)."){
            props.setError("Invalid verification code")
          }else if(error.message === "Firebase: Error (auth/code-expired)."){
            props.setError("Verification code has expired. Request a resend")
          }else{
            props.setError(error.message)
          }
          props.setVerifying(false);
        });
      } catch (err) {
        props.setVerifying(false);
        props.setError('An error occurred when verifying your phone number. Please try again');
      }
  };
  const handleCodeResend = () => {
    
  };
  const handleTryAgain = ()=>{

  }
  return (
    <View>
      <View style={styles.codeinputTitle}>
        <Text style={[styles.textStyles,{fontSize: 20, fontWeight: '700'}]}>Enter Code</Text>
      </View>
      <View style={{ gap: 20 }}>
        <Text style={styles.textStyles}>
          Please enter the code we just sent you.
        </Text>
        <View>
          <BaseInput
            keyboardType="numeric"
            onChangeText={(value) => setVerificationCode(value)}
            inputStyle={{ textAlign: "center" }}
            placeholder="000000"
            placeholderTextColor={theme.colors.text}
          />
        </View>
        <TouchableOpacity onPress={handleCodeResend}>
            <Text style={[styles.textStyles,{textAlign: 'center'}]}>Resend Code</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 30 }}>
        <ActionButton fullWidth disabled={!props.verificationId} onPress={handleContinueTap}>
          Continue
        </ActionButton>
      </View>
    </View>
  );
};

interface VerifyingProps{
  phone:string | string[] | undefined
  error:string
}

const Verifying = (props:VerifyingProps) => {
  const { theme } = useTheme();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.activityIndicatorStyles}>
        <ActivityIndicator size={70} color={theme.colors.primary}/>
        <Text style={styles.textStyles}>Verifying {props.phone}</Text>
        {props.error? <Text style={{color:"red", marginVertical:5}}>{props.error}</Text> : null}

      </View>
    </View>
  );
};
export default CodeVerification;

const useStyles = makeStyles((theme, props:  CodeInputProps) => ({
  container: {
    padding: 15,
    backgroundColor: theme.colors.background,
  },
  textStyles: {
    color: theme.colors.text,
    fontWeight: "600",
    textAlign: "center",
  },
  activityIndicatorStyles: {
    paddingTop: 270, 
    paddingBottom: 20, 
    display: 'flex', 
    flexDirection:'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10
  },
  codeinputTitle: { paddingBottom: 20 },
}));
