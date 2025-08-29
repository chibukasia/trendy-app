import { View, Text, ScrollView } from "react-native";
import BaseInput from "../../components/Atoms/Inputs/BaseInput";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";
import { useState } from "react";
import { makeStyles, useTheme } from "@rneui/themed";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { router, useRouter } from "expo-router";
import Logo from "../../components/Atoms/Brand/Logo";
import { auth } from "../../firebase/firebaseApp";
import { updateProfile } from "firebase/auth";
import React from "react";

const AboutYou = () => {
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [error, setError] = useState<string>("")
  const [open, setOpen] = useState(false);
  const {push} = useRouter()

  const styles = useStyles();
  const handleContinue = () => {
    const displayName = fName + " " + lName;
    auth?.currentUser &&
      updateProfile(auth?.currentUser, {
        displayName: displayName,
      }).then(() => {
          if (!fName || !lName || !date) {
            setError("Ensure all fields are filled");
          } else {
            push("/(auth)/phone-input")
          }
        })
        .catch(function (error) {
          console.log(error)
          setError("An error occurred. Please try again");
        });
  };
  
  const navigatePrivacyPolicy = () => {};
  const navigateTerms = () => {};
  const handleDateInputFocus = () => {
    setOpen(true);
  };
  const handleDateInputOutOFFocus = () => {
    setOpen(false);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    selectedDate && setDate(selectedDate);
    setOpen(false)
  };

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.titleView}>
        <Text
          style={[styles.textStyles,{
            fontWeight: "700",
            fontSize: 20,
          }]}
        >
          Tell Us About You
        </Text>
      </View>
      <View style={styles.inputView}>
        {error ? <Text style={{color:"red", textAlign:"center", marginTop:10}}>{error}</Text> : null}
        <View style={styles.nameInputs}>
          <View style={{ flex: 0.5 }}>
            <BaseInput
              placeholder="First name..."
              onChangeText={(value) => setFname(value)}
            />
          </View>
          <View style={{ flex: 0.5 }}>
            <BaseInput
              placeholder="Last name..."
              onChangeText={(value) => setLname(value)}
            />
          </View>
        </View>
        <View>
          {!open ? (
            <BaseInput
              placeholder="Date of birth..."
              onChangeText={(value) => setLname(value)}
              onFocus={handleDateInputFocus}
              onBlur={handleDateInputOutOFFocus}
              value={date && dayjs(date).format('DD/MM/YYYY')}
            />
          ) : (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View style={{ paddingTop: 270 }}>
        <ActionButton fullWidth onPress={handleContinue}>
          Continue
        </ActionButton>
        <Text
          style={[styles.textStyles,{padding: 15}]}
        >
          By clicking continue you agree to our
          <Text style={{ color: "#0FA958" }} onPress={navigateTerms}>
            Terms
          </Text>
          and acknowledge our
          <Text style={{ color: "#0FA958" }} onPress={navigatePrivacyPolicy}>
            Privacy policy
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutYou;

const useStyles=makeStyles((theme)=>({
  container: {
    padding: 15, 
    paddingTop: 80,
    backgroundColor: theme.colors.background 
  },
  titleView: { paddingBottom: 20 },
  inputView: { gap: 20 },
  nameInputs: { 
    display: "flex", 
    flexDirection: "row", gap: 5 
  },
  textStyles:{
    color: theme.colors.text,
    textAlign: 'center',
  }
 
}))