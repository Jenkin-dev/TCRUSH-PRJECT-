import { View, StyleSheet, Text, TextInput } from "react-native";

const Input = ({ inputtype, style }) => {
  const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "whitesmoke",
      borderWidth: 0,
      borderRadius: 10,
      width: "100%",
    },
    inputText: {
      color: "grey",
      fontFamily: "regular",
      fontSize: 15,
      marginBottom: 5,
    },

    input: {
      paddingHorizontal: 9,
      height: 56,
      fontFamily: "medium",
      width: "90%",
    },
  });
  return (
    <View style={{ ...style }}>
      <Text style={styles.inputText}>{inputtype}</Text>
      <View
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"whitesmoke"}
        style={styles.inputView}
      >
        <TextInput
          style={styles.input}
          placeholder={inputtype}
          placeholderTextColor={"grey"}
        />
      </View>
    </View>
  );
};

export default Input;
