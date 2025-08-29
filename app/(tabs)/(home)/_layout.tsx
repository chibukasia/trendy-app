import { Stack } from "expo-router"; 
import React from "react";

export const unstable_settings={
    initialRouteName:"index"
}
const HomeLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="create-post" options={{ headerTitle:'Create a new post', headerTitleAlign: 'center' }}/>
        </Stack>
    )
}

export default HomeLayout
