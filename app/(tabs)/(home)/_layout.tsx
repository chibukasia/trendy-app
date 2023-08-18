import { Stack } from "expo-router"; 

export const unstable_settings={
    initialRouteName:"index"
}
const HomeLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    )
}

export default HomeLayout
