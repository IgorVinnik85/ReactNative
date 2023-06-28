import {
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Arrow from "../images/arrow-left.svg";
import Send from "../images/send.svg";

export default function CommentsScreen() {
  return (
    <>
      <View style={styles.title}>
        <Text>Коментарі</Text>
        <TouchableOpacity style={styles.arrowSvg} activeOpacity={0.6}>
          <Arrow></Arrow>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.imgWrapper}></View>
      </View>
      <View style={styles.inputCommWrap}>
        <TextInput
          style={styles.btn}
          placeholder={"Коментувати..."}
          // value={description}
          // onChangeText={(value) => setDescription(value)}
        />
        <TouchableOpacity activeOpacity={0.6} style={styles.sendSvg}>
          <Send></Send>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 0,
    alignItems: "center",
    color: "#212121",
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    lineHeight: 22,
    letterSpacing: -0.408,
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  arrowSvg: {
    position: "absolute",
    left: 16,
    bottom: 7,
  },
  contentWrapper: {
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 34,
    paddingLeft: 16,
  },
  imgWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  btn: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 50,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 128,
    paddingLeft: 16,
  },
  inputCommWrap: {
    marginTop: "auto",
    marginBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
    sendSvg: {
        position: 'absolute',
        right: 24,
        bottom: 7,
  },
});
