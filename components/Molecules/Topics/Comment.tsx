import { View, Text, TouchableOpacity, Alert } from "react-native";
import AvatarWithText from "../../Atoms/IconCards/AvatarWithText";
import { Divider, Icon } from "@rneui/base";
import { useState } from "react";
import { useTheme } from "@rneui/themed";
import ChatInput from "../../Atoms/Inputs/ChatInput";
import React from "react";

interface IProps{
    avatar: string;
    content: string;
}
const Comment = (props: IProps) => {
  const { content, avatar} = props
  const [liked, setLiked] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const {theme} = useTheme();

  const handleLikeTap = ()=>{
    setLiked(!liked);
    /**
     * @todo implment logic to updates likes on comments
     */

  }

  const handleReply =()=>{
    setShow(true)
  }

  const onSendMessage = (message: string)=>{
    Alert.alert(message)
    /**
     * @todo implment to send message to comment thread
     */
  }
  return (
    <View style={{ marginBottom: 5}}>
      <AvatarWithText content={content} avatar={avatar}/>
      <View style={{display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          paddingLeft: 20,
          }}>
      <View
        style={{
          width: 150,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity  onPress={handleLikeTap}>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Icon name={liked? 'heart':"hearto"} type="ant-design" size={18} color={liked? '#F44336': theme.colors.text} testID="icon"/>
            <Text>Like</Text>
          </View>
        </TouchableOpacity>
        <Divider orientation="vertical" width={1} />
        <View>
          <TouchableOpacity onPress={handleReply}>
            <Text>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View>
        {show && <ChatInput onSendMessage={onSendMessage} avatarUrl={avatar} setShow={setShow} placeholder="Leave your comment here..."/>}
      </View>
    </View>
  );
};

export default Comment;
