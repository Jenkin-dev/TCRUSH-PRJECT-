import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Signup = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to the home screen</Text>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "blue",
            width: "auto",
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={{ color: "white" }}>Click Me to return to index</Text>
        </Pressable>

        <Pressable
          style={{
            padding: 10,
            backgroundColor: "blue",
            width: "auto",
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={() => {
            router.push("../(home)/newscreen");
          }}
        >
          <Text style={{ color: "white" }}>Click Me</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Signup;
