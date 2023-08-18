import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useAppSelector } from "../store";

const Index = () => {
  const isLoggedIn = useAppSelector((state) => state.authSlice.isLoggedIn);
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  React.useEffect(() => {
    if (!navigationState?.key) return;

    if (!isLoggedIn ) {
      router.replace("/(auth)/login");
      return;
    } else if (isLoggedIn) {
      router.replace("/(tabs)");
      return;
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
};
export default Index;
