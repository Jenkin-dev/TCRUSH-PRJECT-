import { SafeAreaView } from "react-native-safe-area-context";

import { TouchableWithoutFeedback, Dimensions } from "react-native";

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
          paddingHorizontal: width * 0.1,
          backgroundColor: bgColor ? bgColor : "white",
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SafeView;
