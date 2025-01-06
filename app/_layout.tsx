import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rubik_Regular: require("../assets/fonts/Rubik-Regular.ttf"),
    Rubik_Medium: require("../assets/fonts/Rubik-Medium.ttf"),
    Rubik_SemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
    Rubik_Bold: require("../assets/fonts/Rubik-Bold.ttf"),
    Rubik_ExtraBold: require("../assets/fonts/Rubik-ExtraBold.ttf"),
    Rubik_Light: require("../assets/fonts/Rubik-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Stack />;
}
