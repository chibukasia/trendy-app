import { View, ScrollView, Text } from "react-native";
import Logo from "../../components/Atoms/Brand/Logo";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import { useAppSelector } from "../../store";
import { logout } from "../../store/slices/authSlice";
import { useState } from "react";
import { auth } from "../../firebase/firebaseApp";

const EmailVerfication = () => {
  const { theme } = useTheme();
  const styles = useStyles();
  const user = useAppSelector(state => state.authSlice.user)
  const [error, setError] = useState<string>("")
  const {push} = useRouter()
  
  const handleVerifiedEmail = () => {
    auth?.currentUser?.getIdToken(true).then(function() {
      return auth?.currentUser?.reload();
    }).then(function() {
      if (auth?.currentUser?.emailVerified) {
        push("/(auth)/about-you");
      } else {
        setError('Email is not verified.Kindly verify to proceed');
      }
    });
  };
  const handleSignOut = async() => {
    await logout()
    router.replace('/(auth)/register')
  };
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background, padding: 15 }}
    >
      <View style={{ backgroundColor: "#fff", paddingVertical: 30 }}>
        <Logo width={70} height={70} />
      </View>
      <View style={styles.container}>
        <Text style={[styles.textStyles, { fontWeight: "600", fontSize: 20 }]}>
          Verify Your Email
        </Text>
        <View>
          <View style={styles.textViews}>
            <MaterialCommunityIcons
              name="email-outline"
              size={60}
              color={theme.colors.text}
            />
            <Text style={[styles.textStyles, { fontWeight: "600" }]}>
              Verify Your Email
            </Text>
            <Text style={styles.textStyles}>
              Tap on the link we sent to {user?.email}{" "}
            </Text>
          {error ? <Text style={{color:"red", textAlign:"center", marginTop:10}}>{error}</Text> : null}
          </View>
        </View>
        <View style={{ gap: 10, width: "100%" }}>
          <ActionButton fullWidth onPress={handleVerifiedEmail}>
            I’ve verified my email
          </ActionButton>
          <ActionButton
            color={theme.colors.text}
            backgroundColor={theme.colors.disabled}
            fullWidth
            onPress={handleSignOut}
          >
            Sign Out
          </ActionButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default EmailVerfication;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 150,
  },
  textViews: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
  },
  textStyles: {
    color: theme.colors.text,
    textAlign: "center",
  },
}));
