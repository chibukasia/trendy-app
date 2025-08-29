import { ScrollView, } from "react-native";
import NewTopic from "../../../components/Organisims/Topics/NewTopic";
import { makeStyles } from "@rneui/themed";
import React from "react";


const CreatePost = ()=>{
    const styles = useStyles()
    return(
        <ScrollView style={styles.containerStyle}>
            <NewTopic />
        </ScrollView>
    )
}

export default CreatePost;

const useStyles = makeStyles((theme)=>({
    containerStyle: {
        padding: 15,
        backgroundColor: theme.colors.background
    }
}))