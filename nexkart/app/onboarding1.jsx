import { Text, Image, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import SafeView from "../components/safe-view";

const Onboarding = () => {
  return (
    <SafeView>
      <View>
        <Image
          style={styles.image1}
          source={require("../assets/images/onboarding image.png")}
        />
      </View>
      <View>
        <Text style={{ fontFamily: "" }}>
          Wishing for an item but it is too expensive
        </Text>
      </View>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    margin: 4,
  },

  image1: {
    height: 245,
    width: "100%",
    alignSelf: "center",
    marginTop: 100,
  },
});
export default Onboarding;
