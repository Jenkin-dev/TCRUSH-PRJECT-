import { SafeAreaView } from "react-native-safe-area-context";

import { TouchableWithoutFeedback, Dimensions, Keyboard } from "react-native";

const SafeView = ({ children, bgColor }) => {
  const { width } = Dimensions.get("screen");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView
        style={{
          marginHorizontal: width * 0.02,
          backgroundColor: bgColor ? bgColor : "white",
          flex: 1,
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SafeView;
