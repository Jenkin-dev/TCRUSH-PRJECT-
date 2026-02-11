import { TouchableOpacity, Text } from "react-native";

const Button = ({ text, style, icon, textColor, fontfamily, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#4B164C",
        height: 55,
        borderRadius: 10,
        justifyContent: "center",
        ...style,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {icon && icon}

      <Text
        style={{
          alignSelf: "center",
          color: textColor ? textColor : "white",
          fontSize: 18,
          fontFamily: fontfamily ? fontfamily : "regular",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
