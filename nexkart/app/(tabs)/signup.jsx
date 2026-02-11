import { SafeAreaView } from "react-native-safe-area-context";
import SafeView from "../../components/safe-view";
import { View, Text, Pressable } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import TopTab from "../../components/toptab";

const Signup = () => {
  return (
    <SafeView>
      <TopTab />

      <View>{/* <Text>Login Screen</Text> */}</View>
    </SafeView>
  );
};
export default Signup;
