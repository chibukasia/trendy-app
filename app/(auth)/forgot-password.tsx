import { Text } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";
import { isValidEmail } from "../../utils";
import { router } from "expo-router";
import BaseInput from "../../components/Atoms/Inputs/BaseInput";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebaseApp";
import React from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>("")
    const styles = useStyles();

    const handleContinue = ()=>{
        if(isValidEmail(email)){
          sendPasswordResetEmail(auth, email)
          .then(() => {
            router.replace('/(auth)/confirmation-resetlink')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage === "Firebase: Error (auth/user-not-found)."){
              setError("User does not exist. Enter the correct email or create an account")
            }else{
              setError(errorMessage)
            }
          });
        }
    }
  return (
    <ScrollView style={styles.parentContainer}>
      <View style={{gap: 20}}>
        <Text style={[styles.textStyles, {fontSize: 20}]}>Reset Your Password</Text>
        <Text style={[styles.textStyles, {fontWeight:'400'}]}>
          Enter your email address and we will send you instructions to reset
          your password.
        </Text>
      </View>
      <View style={{paddingTop: 60}}>
        <Text style={[styles.textStyles,{textAlign:'left',}]}>Email Address</Text>
        <BaseInput onChangeText={setEmail} placeholder="someone@example.com"/>
        {error ? <Text style={{color:"red", textAlign:"center", marginTop:10}}>{error}</Text> : null}
      </View>
      <View style={{paddingTop: 30}}>
        <ActionButton fullWidth onPress={handleContinue}>
          Continue
        </ActionButton>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const useStyles = makeStyles((theme)=>({
  parentContainer:{
    backgroundColor: theme.colors.background, 
    padding: 15,
    paddingTop:80,
  },
  textStyles:{
    color: theme.colors.text, textAlign: 'center', fontWeight: '700'
  }

}))
