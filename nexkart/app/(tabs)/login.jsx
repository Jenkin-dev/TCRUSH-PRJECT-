import { View, Text, Pressable } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import SafeView from "../../components/safe-view";

const Login = () => {
  return (
    <SafeView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Login Screen</Text>
      </View>
    </SafeView>
  );
};
export default Login;
