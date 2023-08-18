import { Stack } from "expo-router"; 

export const unstable_settings={
    initialRouteName:"index"
}
const NotificationsLayout
 = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerTitle: 'Notifications', headerTitleAlign: 'center'}} />
            <Stack.Screen name="notification-settings" options={{ headerTitle: 'Notification Settings', headerTitleAlign: 'center'}} />
        </Stack>
    )
}

export default NotificationsLayout

