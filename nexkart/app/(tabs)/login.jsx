import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { router } from "expo-router";
import SafeView from "../../components/safe-view";
import TopTab from "../../components/toptab";

import Button from "../../components/button";
import Socialmedia from "../../components/socialmedia";

import Passwordinput from "../../components/passwordInput";

const Login = () => {
  const styles = StyleSheet.create({
    forgotPassword: {
      color: "#4C69FF",
      fontFamily: "regular",
      fontSize: 13,
    },

    line: {
      height: 1,
      backgroundColor: "#ccc",
      width: "100%",
      marginVertical: 40,
    },

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

    dp: {
      height: 80,
      width: 80,
    },

    icon: {
      height: 24,
      width: 24,
      position: "relative",
      left: -50,
      top: 2,
      marginBottom: 5,
      alignSelf: "center",
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
          <Passwordinput head={"Password"} />
          <Button
            text="Login"
            style={{
              backgroundColor: "#3DBECB",
              marginVertical: 15,
            }}
            onPress={() => router.push("/")}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line} />
        <Button
          icon={
            <Image
              style={styles.icon}
              source={require("./assets/Images/faceid.png")}
            />
          }
          textColor="#4C69FF"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#4C69FF",
            borderWidth: 2,
            marginBottom: 20,
          }}
          text="Login with Face ID"
        />

        <Socialmedia style={{ position: "relative", bottom: -5 }} />
      </View>
    </SafeView>
  );
};
export default Login;
