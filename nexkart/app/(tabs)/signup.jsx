import { SafeAreaView } from "react-native-safe-area-context";
import SafeView from "../../components/safe-view";
import { View, Text, Pressable, StyleSheet } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import TopTab from "../../components/toptab";
import Input from "../../components/input";
import Passwordinput from "../../components/passwordInput";
import Button from "../../components/button";
import Socialmedia from "../../components/socialmedia";

const Signup = () => {
  const styles = StyleSheet.create({
    head: {
      fontSize: 24,
      fontFamily: "alexandriaRegular",
      // marginBottom: 10,
    },

    line: {
      height: 1,
      backgroundColor: "#ccc",
      width: "100%",
      marginVertical: 30,
    },
  });

  return (
    <SafeView>
      <TopTab />
      <View style={{ marginHorizontal: 30 }}>
        <Text style={styles.head}>Manual Sign Up</Text>
        <Input style={{ marginVertical: 15 }} inputtype={"Username"} />
        <Passwordinput head={"Password"} />
        <Passwordinput head={"Confirm Password"} />

        <View style={{ paddingVertical: 10 }}></View>
        <Button
          style={{ backgroundColor: "#3DBECB" }}
          text="Sign Up"
          fontfamily="alexandriaSemibold"
          onPress={() => router.push("/(tabs)/login")}
        />

        <View style={styles.line} />

        <Text style={[styles.head, { fontSize: 18 }]}>
          Connect with Social Media
        </Text>
        <Socialmedia />
      </View>
    </SafeView>
  );
};
export default Signup;
