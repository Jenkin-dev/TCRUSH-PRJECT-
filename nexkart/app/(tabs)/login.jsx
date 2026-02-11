import { View, Text, Pressable } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import SafeView from "../../components/safe-view";
import TopTab from "../../components/toptab";

const Login = () => {
  return (
    <SafeView>
      <TopTab style={{ height: "fit-content" }} />

      <View>
        <View>
          <Text>Hello again</Text>
          <Text>Quinnbriar</Text>
          <Text>This isn’t me</Text>
        </View>
        <View></View>
      </View>
    </SafeView>
  );
};
export default Login;
