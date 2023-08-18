import { makeStyles, useTheme } from "@rneui/themed";
import { View, Text, ScrollView } from "react-native";
import AuthForm from "../../components/Organisims/Authentication/AuthForm";

const Register = ()=>{
  const styles = useStyles();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textStyles}>
          Create Your Account
        </Text>
      </View>
      <View>
        <AuthForm state="signup"/>
      </View>
    </ScrollView>
  );
} 

export default Register

const useStyles=makeStyles((theme)=>({
  container:{
    padding: 15, 
    paddingTop: 80,
    backgroundColor: theme.colors.background
  },
  textStyles: { 
    fontSize: 24, 
    fontWeight: "700", 
    textAlign: "center", 
    color: theme.colors.text 
  }
}))