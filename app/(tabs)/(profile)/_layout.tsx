import { Stack } from "expo-router"; 

export const unstable_settings={
    initialRouteName:"index"
}
const ProfileLayout = ()=>{
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerTitle: 'Profile', headerTitleAlign: 'center'}} /> 
            <Stack.Screen name="categories" options={{}} />
        </Stack>
    )
}

export default ProfileLayout

