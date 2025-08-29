import { View, Text, ScrollView } from "react-native";
import NotificationsList from "../../../components/Organisims/Notifications/NotificationsList";
import { makeStyles } from "@rneui/themed";
import React from "react";


const Notifications = () => {
  const styles= useStyles();
  return (
    <ScrollView
      style={styles.container}
    >
      <NotificationsList />
    </ScrollView>
  );
};

export default Notifications;

const useStyles = makeStyles((theme)=>({
  container:{ 
    padding: 15, 
    backgroundColor: theme.colors.background 
  }
}))
