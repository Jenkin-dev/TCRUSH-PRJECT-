import { View, Text, Pressable } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import SafeView from "../../components/safe-view";
import TopTab from "../../components/toptab";

const Login = () => {
  return (
    <SafeView>
      <TopTab />

      <View>{/* <Text>Login Screen</Text> */}</View>
    </SafeView>
  );
};
export default Login;
