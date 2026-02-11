import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import SafeView from "./safe-view";
import { usePathname, router } from "expo-router";
import { useState } from "react";

const Toptab = (style) => {
  //   const [active, setActive] = useState("Login");
  const pathname = usePathname();
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 23,
          ...style,
        }}
      >
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/images/Signup_Login logo.png")}
          />
        </View>

        <View style={styles.textView}>
          <Pressable
            style={[
              styles.press,
              { borderBottomWidth: pathname === "/login" ? 4 : 0 },
            ]}
            onPress={() => {
              router.push("/login");
              // setActive("Login");
            }}
          >
            <Text style={styles.text}>Login</Text>
          </Pressable>
          <Pressable
            style={[
              styles.press,
              { borderBottomWidth: pathname === "/signup" ? 4 : 0 },
            ]}
            onPress={() => {
              router.push("/signup");
              // setActive("Sign Up");
            }}
          >
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 56,
    width: 56,
    alignSelf: "center",
    marginTop: 30,
    resizeMode: "cover",
  },

  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },

  text: {
    fontFamily: "alexandriaRegular",
    fontSize: 22,
    alignSelf: "center",
    // marginBottomWidth: 20,
  },

  press: {
    // borderBottomWidth: 2,
    borderBottomColor: "#4C69FF",
    paddingBottom: 10,
    width: "45%",
  },
});

export default Toptab;
