import { View, ScrollView, Text } from "react-native";
import ActionButton from "../../components/Atoms/Buttons/ActionButton";
import { makeStyles, useTheme } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";

const ConfirmationResetLink = () => {
  const { theme } = useTheme();
  const styles = useStyles();
  const {email} = useLocalSearchParams()
 
  const handleEmailResent = () => {
    /**
     * @todo implement logic to resend email
     */
  };
  return (
    <ScrollView
      style={styles.parentContainer}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.textViews}>
            <MaterialCommunityIcons
              name="email-outline"
              size={60}
              color={theme.colors.text}
            />
            <Text style={[styles.textStyles, { fontWeight: "700", fontSize: 20 }]}>
              Check Your Email
            </Text>
            <Text style={[styles.textStyles, {paddingTop: 30}]}>
              Please check your email address {email} for instructions
              to reset your password.
            </Text>
          </View>
        </View>
        <View style={styles.actionButtonStyles}>
          <ActionButton fullWidth onPress={handleEmailResent} backgroundColor="transparent" color={theme.colors.text}>
            Resend Email
          </ActionButton>
        </View>
        <View style={styles.actionButtonStyles}>
          <ActionButton fullWidth onPress={() => router.replace('/(auth)/password')} backgroundColor="transparent" color={theme.colors.text}>
            Go to login
          </ActionButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmationResetLink;

const useStyles = makeStyles((theme) => ({
  parentContainer:{ 
    backgroundColor: theme.colors.background, 
    padding: 15 
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 50,
    paddingTop: 100
  },
  textViews: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 250,
  },
  textStyles: {
    color: theme.colors.text,
    textAlign: "center",
  },
  actionButtonStyles: {
    borderWidth: 1, 
    borderColor: theme.colors.primary, 
    borderRadius: 10,  
    width: "100%" 
  }
}));
