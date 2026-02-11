import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";

const Passwordinput = ({ head, onChangeText }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [hideIcon, setHideIcon] = useState(
    require("../assets/images/hide.png"),
  );

  const [password, setPassword] = useState("");

  console.log("The password is:", password);

  const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "whitesmoke",
      borderWidth: 0,
      borderRadius: 10,
      width: "100%",
      marginBottom: 15,
    },
    inputText: {
      color: "grey",
      fontFamily: "light",
      fontSize: 15,
      marginBottom: 5,
    },

    input: {
      paddingHorizontal: 20,
      height: 56,

      width: "90%",
    },

    hide: {
      height: 24,
      width: 24,
    },
  });
  return (
    <View>
      <Text style={styles.inputText}>{head}</Text>
      <View
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"whitesmoke"}
        style={styles.inputView}
      >
        <TextInput
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={head}
          placeholderTextColor={"grey"}
          secureTextEntry={!passwordVisible}
        />

        <Pressable
          onPress={() => {
            {
              setPasswordVisible(!passwordVisible);
              setHideIcon(
                passwordVisible
                  ? require("../assets/images/hide.png")
                  : require("../assets/images/reveal.png"),
              );
            }
          }}
        >
          <Image style={styles.hide} source={hideIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default Passwordinput;
