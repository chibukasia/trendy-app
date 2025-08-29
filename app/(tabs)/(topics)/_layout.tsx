import { Stack } from "expo-router"; 
import React from "react";

export const unstable_settings={
    initialRouteName:"index"
}
const TopicsLayout = ()=>{
    return(
        <Stack >
            <Stack.Screen name="index" options={{headerTitle: 'Topics', headerTitleAlign: 'center'}} />
            <Stack.Screen name="post-details" options={{headerShown: false}}/>
        </Stack>
    )
}

export default TopicsLayout
