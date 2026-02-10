import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    regular: require("../assets/fonts/Montserrat,Roboto/Roboto/static/Roboto-Regular.ttf"),
    medium: require("../assets/fonts/Montserrat,Roboto/Roboto/static/Roboto-Medium.ttf"),
    semibold: require("../assets/fonts/Montserrat,Roboto/Roboto/static/Roboto-SemiBold.ttf"),
    bold: require("../assets/fonts/Montserrat,Roboto/Roboto/static/Roboto-Bold.ttf"),
    italic: require("../assets/fonts/Montserrat,Roboto/Roboto/static/Roboto-Italic.ttf"),
    light: require("../assets/fonts/Montserrat,Roboto/Roboto/static/Roboto-Light.ttf"),
  });

  if (error) {
    console.log("Error loading fonts", error);
    return null;
  }

  console.log("loaded?", loaded, " is error ", error);

  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default RootLayout;
