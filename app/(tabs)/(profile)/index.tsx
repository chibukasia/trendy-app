import { ScrollView, View } from "react-native";
import ProfileInfo from "../../../components/Organisims/Profile/ProfileInfo";
import { makeStyles, } from "@rneui/themed";

const Profile = () => {
  const styles = useStyles()
  return (
    <ScrollView style={styles.container}>
        <ProfileInfo />
    </ScrollView>
  );
};

export default Profile;

const useStyles = makeStyles((theme)=>({
  container: {
    paddingHorizontal: 15, 
    backgroundColor:theme.colors.background,
    paddingTop: 50,
  }
}))