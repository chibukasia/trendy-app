import { ScrollView, View, Text } from "react-native";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import PhoneInput from "react-native-phone-number-input";
import React, { useRef, useState } from "react";
import { router, useRouter } from "expo-router";
import Logo from "../../components/Atoms/Brand/Logo";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { app, auth } from "../../firebase/firebaseApp";
import { ApplicationVerifier, PhoneAuthProvider } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const Phone = () => {
  const recaptchaVerifier = React.useRef<FirebaseRecaptchaVerifierModal>(null);;
  const [value, setValue] = useState<string>("");
  const [formattedValue, setFormattedValue] = useState<string>("");
  const [error, setError] = useState<string>("")
  const phoneInput = useRef<PhoneInput>(null);
  const styles = useStyles();
  const {push} = useRouter();
  
  const handleTapContinue = async() => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        formattedValue,
        recaptchaVerifier?.current as ApplicationVerifier
      );
      push({
        pathname: `/(auth)/code-verification`,
        params: { phone: formattedValue, verificationId },
      });
    } catch (err:any) {
      if(err.message === "Firebase: TOO_LONG (auth/invalid-phone-number)." || err.message === "Firebase: TOO_SHORT (auth/invalid-phone-number)." || err.message === "Firebase: Error (auth/invalid-phone-number)."){
        setError("Invalid phone number")
      }else{
        setError(err.message)
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
      <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
        <Logo width={70} height={70} />
      </View>
      <View style={{ paddingBottom: 20 }}>
        <Text style={styles.textStyles}>Enter Your Phone Number</Text>
      </View>
      <View style={{ gap: 20 }}>
        <View>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="KE"
            layout="first"
            placeholder=" "
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={{ width: "100%", gap: 10 }}
            countryPickerButtonStyle={styles.countryPickerButtonStyle}
            textContainerStyle={styles.textContainerStyle}
            autoFocus
          />
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        {error? <Text style={{color:"red", marginVertical:5}}>{error}</Text> : null}
        <ActionButton fullWidth onPress={handleTapContinue}>
          Continue
        </ActionButton>
      </View>
    </ScrollView>
  );
};

export default Phone;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
    backgroundColor: theme.colors.background,
  },
  textStyles: {
    color: theme.colors.text,
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  countryPickerButtonStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.stroke,
    height: 50,
  },
  textContainerStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.stroke,
    height: 50,
    paddingVertical: 0,
    backgroundColor: theme.colors.background,
  },
}));
