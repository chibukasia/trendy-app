import { makeStyles, useTheme } from "@rneui/themed";
import { ScrollView, View, Text } from "react-native";
import PasswordInput from "../../components/Organisims/Authentication/PasswordInput";
import React from "react";

const Password = () => {
  const styles = useStyles()
  return (
    <ScrollView
      style={styles.parentContainer}
    >
      <View>
        <Text
          style={styles.textStyles}
        >
          Enter Password
        </Text>
      </View>
      <View style={styles.passwordView}>
        <PasswordInput />
      </View>
      
    </ScrollView>
  );
};

export default Password;

const useStyles = makeStyles((theme)=>({
  parentContainer: { 
    padding: 15, 
    paddingTop: 80,
    backgroundColor: theme.colors.background 
  },
  textStyles:{
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: theme.colors.text,
  },
  passwordView: { paddingTop: 20 }
}))