import { makeStyles, useTheme } from "@rneui/themed";
import { View, Text, ScrollView } from "react-native"; 
import PostDetailsComponent from "../../../components/Organisims/Posts/PostDetails";

const PostDetails = () =>{
    const styles = useStyles()
  return (
    <ScrollView style={styles.conatiner}>
      <PostDetailsComponent />
    </ScrollView>
  );
}

export default PostDetails

const useStyles = makeStyles((theme)=>({
  conatiner: { paddingHorizontal: 15, backgroundColor: theme.colors.background}
}))