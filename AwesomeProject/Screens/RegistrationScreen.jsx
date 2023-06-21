import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
// import AddSvg from '../images/add.svg'

export const RegistrationScreen = () => {
  // const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [login, setLogin] = useState(initialText);
  const [email, setEmail] = useState(initialText);
  const [password, setPassword] = useState(initialText);
  const [text, setText] = useState(initialText);

  return (
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
            <View style={styles.photoWrapper}></View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              // inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setLogin}
              value={login}
              placeholder={"Логін"}
            />
            <TextInput
              style={styles.input}
              // inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setEmail}
              value={email}
              placeholder={"Адреса електронної пошти"}
            />
            <TextInput
              style={[styles.input, styles.lastInput]}
              // inputAccessoryViewID={inputAccessoryViewID}
              onChangeText={setPassword}
              value={password}
              placeholder={"Пароль"}
            />
            <View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.6}
                onPress={setText}
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
    height: 549,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
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
});
