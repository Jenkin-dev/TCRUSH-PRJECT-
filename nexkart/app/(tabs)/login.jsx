import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import SafeView from "../../components/safe-view";
import TopTab from "../../components/toptab";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = StyleSheet.create({
    text1: {
      fontSize: 20,
      fontFamily: "medium",
      color: "#000000",
    },

    text2: {
      fontSize: 30,
      fontFamily: "medium",
    },

    text3: {
      fontSize: 15,
      paddingTop: 20,
      fontFamily: "semibold",
      color: "#4C69FF",
    },

    passwordView: {
      backgroundColor: "whitesmoke",
      borderWidth: 0,
      borderRadius: 10,
      width: "100%",
    },
    passwordText: {
      color: "grey",
      fontFamily: "light",
      fontSize: 15,
    },

    password: {
      paddingHorizontal: 20,
      height: 56,

      width: "90%",
    },

    hide: {
      height: 24,
      width: 24,
    },
    dp: {
      height: 80,
      width: 80,
    },

    icon: {
      height: 24,
      width: 24,
      position: "relative",
      left: -40,
    },
  });

  return (
    <SafeView>
      <TopTab />
      <View style={{ marginHorizontal: 30 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.text1}>Hello again,</Text>
            <Text style={styles.text2}>Quinnbriar</Text>

            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.text3}>This isn’t me</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.dp}
              source={require("./assets/Images/dp image.png")}
            />
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.passwordText}>Password</Text>
          <View
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"whitesmoke"}
            style={styles.passwordView}
          >
            <TextInput
              style={styles.password}
              placeholder="Password"
              placeholderTextColor={"grey"}
              secureTextEntry={!passwordVisible}
            />

            <Pressable
              onPress={() => {
                setPasswordVisible(!passwordVisible);
              }}
            >
              <Image
                style={styles.hide}
                source={require("./assets/Images/hide.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeView>
  );
};
export default Login;
