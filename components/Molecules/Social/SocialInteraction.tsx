import { View } from "react-native";
import SocialInteractionButton from "../../Atoms/Buttons/SocialInteractionButton";
import { makeStyles } from "@rneui/themed";
import React from "react";

interface IProps {
    handleReactions: ()=>void;
    handleComments: ()=>void;
    handleShare: ()=>void;
    comments?: string;
    reactions?: string;
    shares?: string;
}
const SocialInteraction = (props: IProps)=>{
    const {handleComments, handleReactions, handleShare, comments, reactions, shares} = props 
    const styles = useStyles()
    return(
     <View style={styles.container}>
       <SocialInteractionButton title={reactions? reactions: "React"} name="smile-o" onPress={handleReactions}/>
       <SocialInteractionButton title={comments? comments: "Comment"} name="commenting-o" onPress={handleComments}/>
       <SocialInteractionButton title={shares? shares: "Share"} name="share-alt" onPress={handleShare}/>
     </View>
    )
}

export default SocialInteraction 

const useStyles = makeStyles(()=>({
    container: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    }
}))