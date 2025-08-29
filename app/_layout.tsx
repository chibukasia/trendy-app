import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, View, useColorScheme, Text } from "react-native";
import { Provider } from "react-redux";
import store from "../store";
import { ThemeProvider, useTheme } from "@rneui/themed";
import { darkTheme, lightTheme } from "../rn-elements";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import React from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    // Render a loading screen or any other placeholder while the fonts are loading
    return (
      <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      {loaded && <RootLayoutNav />}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { theme } = useTheme();
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
          <NavigationThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack screenOptions={{ headerShown: false }} />
          </NavigationThemeProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
