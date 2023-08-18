import React from "react";
import { ScrollView, Text, View } from "react-native";
import { makeStyles, useTheme } from "@rneui/themed";
import AuthForm from "../../components/Organisims/Authentication/AuthForm";
import Logo from "../../components/Atoms/Brand/Logo";

const LoginScreen = () => {
  const { theme } = useTheme();
  const styles = useStyles();

  return (
    <ScrollView
      style={styles.parentContainer}
    >
      <View style={styles.logoContainer}>
        <Logo width={70} height={70} />
      </View>
      <View>
        <Text
          style={styles.textStyles}
        >
          Welcome
        </Text>
      </View>
      <View>
        <AuthForm />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
const useStyles = makeStyles((theme) => ({
  parentContainer: {
    padding: 15,
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    backgroundColor: theme.colors.background,
    paddingVertical: 30,
  },
  textStyles: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: theme.colors.text,
  },
}));