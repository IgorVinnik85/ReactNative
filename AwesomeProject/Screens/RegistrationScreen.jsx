import React, { useEffect, useState } from "react";
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
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const initialAuth = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  // const inputAccessoryViewID = "uniqueID";
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [stateAuth, setStateAuth] = useState(initialAuth);
  const [dimensions, setDimensions] = useState(0);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log(width);
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const onKeyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(stateAuth);
    setStateAuth(initialAuth);
  };
  const onLogin = () => {
    console.log(stateLogin);
  };
  return (
    <TouchableWithoutFeedback onPress={onKeyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/background.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                height: isShowKeyboard ? 360 : 549,
                // height: dimensions === 430 ? 549 : 470,
              }}
            >
              <View style={styles.photoWrapper}>
                <TouchableOpacity style={styles.addButton} activeOpacity={0.6}>
                  <Icon
                    style={styles.add}
                    name="add-circle-outline"
                    size={25}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                // inputAccessoryViewID={inputAccessoryViewID}
                value={stateAuth.login}
                placeholder={"Логін"}
                onChangeText={(value) =>
                  setStateAuth((prevState) => ({ ...prevState, login: value }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <TextInput
                style={styles.input}
                // inputAccessoryViewID={inputAccessoryViewID}
                value={stateAuth.email}
                placeholder={"Адреса електронної пошти"}
                onChangeText={(value) =>
                  setStateAuth((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <TextInput
                style={[styles.input, styles.lastInput]}
                // inputAccessoryViewID={inputAccessoryViewID}
                value={stateAuth.password}
                placeholder={"Пароль"}
                onChangeText={(value) =>
                  setStateAuth((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  ...styles.btnShow,
                  top: isShowKeyboard ? 305 : 305,
                }}
              >
                <Text style={styles.btnShowText}>Показати</Text>
                {/* <Button style={styles.btnShowText} title="Показати" /> */}
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.6}
                  onPress={onLogin}
                >
                  <Text style={styles.btnAuth}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLink} activeOpacity={0.6}>
                  <Text style={styles.btnLinkIn}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  photoWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    zIndex: 2,
    top: 0,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        marginTop: -50,
      },
      android: {
        marginTop: -50,
      },
    }),
    // marginTop: Platform.OS === "ios" ? 325 : 220,
  },
  photoWrapperForm: {
    // marginBottom: 100,
  },
  form: {
    width: "100%",
    // height: 549,
    // position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        position: "static",
      },
      android: {
        position: "absolute",
      },
    }),
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",

    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  lastInput: {
    marginBottom: 43,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnShow: {
    position: "absolute",
    // bottom: 237,
    right: 30,
  },
  btnShowText: {
    color: "#1B4371",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  btnAuth: {
    color: "#ffffff",
    fontSize: 16,
  },
  btnLink: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnLinkIn: {
    color: "#1B4371",
    fontSize: 16,
  },
  addButton: {
    position: "absolute",
    top: 80,
    right: -12,
  },
  add: {
    color: "#FF6C00",
  },
});
