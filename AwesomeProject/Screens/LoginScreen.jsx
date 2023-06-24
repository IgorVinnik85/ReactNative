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

const initialAuth = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
      const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [stateAuth, setStateAuth] = useState(initialAuth);
    
      const onKeyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(stateAuth);
        setStateAuth(initialAuth);
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
              <View style={styles.form}>
                <Text style={styles.title}>Увійти</Text>
                <TextInput
                  style={styles.input}
                  // inputAccessoryViewID={inputAccessoryViewID}
                  value={stateAuth.email}
                  placeholder={"Адреса електронної пошти"}
                  onChangeText={(value) =>
                    setStateAuth((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                  onFocus={() => {
                    setIsShowKeyboard(true);
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
                />
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    ...styles.btnShow,
                    top: isShowKeyboard ? 180 : 180,
                  }}
                >
                  <Text style={styles.btnShowText}>Показати</Text>
                  {/* <Button style={styles.btnShowText} title="Показати" /> */}
                </TouchableOpacity>
                {!isShowKeyboard && (
                  <View>
                    <TouchableOpacity
                      style={styles.btn}
                      activeOpacity={0.6}
                      onPress={onKeyboardHide}
                    >
                      <Text style={styles.btnAuth}>Увійти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btnLink}
                      activeOpacity={0.6}
                    >
                      <Text style={styles.btnLinkIn}>
                        Немає акаунту? Зареєструватися
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
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

  form: {
    // flex: 1,
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // marginTop: 323,
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
    marginBottom: 32,
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
    marginBottom: 111,
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
});
