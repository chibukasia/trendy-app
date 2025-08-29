import { Button, } from "@rneui/base";
import { makeStyles, useTheme } from "@rneui/themed";
import { View, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

interface IProps{
    onDeleteNotification: ()=>void;
    onNotificationTurnOff: ()=>void;
    onViewSettingPress: ()=>void;
}
const NotificationActions = (props:IProps) => {
  const {onDeleteNotification, onNotificationTurnOff, onViewSettingPress} = props
  const styles = useStyles();
  const {theme} = useTheme()
  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyles} onPress={onDeleteNotification}>
        <Ionicons name="md-trash-sharp" size={20} color={theme.colors.text} />
        Delete notification
      </Button>
      <Button buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyles} onPress={onNotificationTurnOff}>
        <Ionicons name="notifications-off-outline" size={20} color={theme.colors.text} />
        Turn off this notification type
      </Button>
      <Button buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyles} onPress={onViewSettingPress}>
        <Ionicons name="settings-sharp" size={20} color={theme.colors.text} />
        View settings
      </Button>
    </View>
  );
};

export default NotificationActions;

const useStyles = makeStyles((theme)=>({
    container: {
        width: '100%',
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius:20,
        padding: 10,
        gap:10,
    },
    buttonStyles:{
        backgroundColor: 'transparent',
        paddingLeft: 10,
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        backgroundColor: 'transparent',
    },
    titleStyles:{
        color: theme.colors.text,
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: 10,
    }
}))
