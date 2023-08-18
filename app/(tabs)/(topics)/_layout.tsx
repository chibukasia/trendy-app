import { Stack } from "expo-router"; 

export const unstable_settings={
    initialRouteName:"index"
}
const TopicsLayout = ()=>{
    return(
        <Stack >
            <Stack.Screen name="index" options={{headerTitle: 'Topics', headerTitleAlign: 'center'}} />
            <Stack.Screen name="topic-list" options={{headerShown: false}}/>
            <Stack.Screen name="post-details" options={{headerShown: false}}/>
        </Stack>
    )
}

export default TopicsLayout
