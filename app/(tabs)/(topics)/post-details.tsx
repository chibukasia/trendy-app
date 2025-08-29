import { makeStyles, useTheme } from "@rneui/themed";
import React from "react";
import { View, Text, ScrollView } from "react-native"; 
import PostDetailsComponent from "../../../components/Organisims/Posts/PostDetails";
import { SafeAreaView } from "react-native-safe-area-context";

const PostDetails = () =>{
    const styles = useStyles()
  return (
    <SafeAreaView>
    <ScrollView style={styles.conatiner}>
      <PostDetailsComponent />
    </ScrollView>
    </SafeAreaView>
  );
}

export default PostDetails

const useStyles = makeStyles((theme)=>({
  conatiner: { paddingHorizontal: 15, backgroundColor: theme.colors.background}
}))