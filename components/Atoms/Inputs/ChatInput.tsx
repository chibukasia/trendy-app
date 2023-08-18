import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Input, makeStyles } from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'
import { Avatar } from '@rneui/base'


interface IProps{
    avatarUrl: string;
    onSendMessage:(message: string)=>void;
    setShow?: (show: boolean)=>void;
    placeholder?: string;
}

const ChatInput = (props: IProps) => {
  const {avatarUrl, onSendMessage, setShow, placeholder} = props
  const [message, setMessage] = useState<string>('');
  const styles = useStyles()
  const handleSend = ()=>{
    setShow && setShow(false)
    onSendMessage(message)
  }
  return (
    <KeyboardAvoidingView style={styles.container} testID='chat-input-container'>
        <View testID='avatar'>
            <Avatar source={{uri: avatarUrl}} rounded size={30}/>
        </View>
        <View style={styles.chatContainer} >
            <Input
                placeholder={placeholder ?? "What's on your mind?"}
                onChangeText={setMessage}
                testID='input'
            />
        </View>
        
        <TouchableOpacity style={styles.sendButton} onPress={handleSend} testID='send-button'>
            <Ionicons
                name="send"
                size={15}
                color="white"
            />
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default ChatInput

const useStyles = makeStyles((theme)=>{
    return {
        container: {
            width: "100%",
            backgroundColor: theme.colors.background,
            borderRadius: 15,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10
        },
        chatContainer: {
            height: 40,
            width: "80%",
        },
        sendButton: {
            width: 30,
            height: 30,
            borderRadius: 20,
            backgroundColor: theme.colors.primary,
            alignItems: "center",
            justifyContent: "center",
        }
    }
})