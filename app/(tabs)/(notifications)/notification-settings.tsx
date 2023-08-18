import { ScrollView, View, Text } from "react-native";
import ToggleField from "../../../components/Atoms/Toggles/ToggleField";
import { makeStyles, useTheme } from "@rneui/themed";

const notifications = [
  {
    id: "1",
    title: "News And Report",
    checked: false,
  },
  {
    id: "2",
    title: "New Swarms Created",
    checked: false,
  },
  {
    id: "3",
    title: "Swarms Activity Updates",
    checked: false,
  },
  {
    id: "4",
    title: "Replies And Mentions",
    checked: false,
  },
  {
    id: "5",
    title: "Swarm Recommendations",
    checked: false,
  },
  {
    id: "6",
    title: "App Updates or Announcement",
    checked: false,
  },
  {
    id: "7",
    title: "Daily or Weekly Digest",
    checked: false,
  },
];
const NotificationSettings = () => {
  const { theme } = useTheme();
  const styles = useStyles();
  const handleNotificationCheck = (id: string | number) => {};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Notifications you receive</Text>
      <View>
        {notifications.map((notification, index) => (
          <ToggleField
            key={index}
            onCheck={() => handleNotificationCheck(notification.id)}
            title={notification.title}
            checked={notification.checked}
            color={theme.colors.text}
            bold
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default NotificationSettings;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: 15,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 17
  }
}));
