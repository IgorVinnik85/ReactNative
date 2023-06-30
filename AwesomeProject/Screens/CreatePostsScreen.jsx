import React, { useEffect, useState, useRef } from "react";
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
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Arrow from "../images/arrow-left.svg";
import CameraSvg from "../images/camera.svg";
import MapPin from "../images/map-pin.svg";
import Trash from "../images/trash.svg";
import SyncOutline from "react-native-vector-icons/Ionicons";

export default function CreatePostsScreen({ navigation }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onKeyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onKeyboardHide}>
      <View style={styles.pageWrap}>
        <View style={styles.title}>
          <Text>Створити публікацію</Text>
          <TouchableOpacity
            style={styles.arrowSvg}
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}
          >
            <Arrow></Arrow>
          </TouchableOpacity>
        </View>
        <View style={styles.contentWrapper}>
          <Camera style={styles.imgWrapper} type={type} ref={setCameraRef}>
            <TouchableOpacity
              style={styles.camReverse}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <SyncOutline name="sync-outline" size={25}></SyncOutline>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.camWrapSvg}
              activeOpacity={0.6}
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                }
              }}
            >
              <View style={styles.camWrapSvg}>
                <CameraSvg></CameraSvg>
              </View>
            </TouchableOpacity>
          </Camera>
          <Text style={styles.photoTitle}>Завантажте фото</Text>
          <View>
            <TextInput
              style={styles.inputTitle}
              placeholder={"Назва..."}
              value={description}
              onChangeText={(value) => setDescription(value)}
            />
            <MapPin style={styles.mapPin}></MapPin>
            <TextInput
              style={[styles.inputTitle, styles.inputTitleFirst]}
              placeholder={"Місцевість..."}
              value={location}
              onChangeText={(value) => setLocation(value)}
            />
            <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
              <Text style={styles.btnShowText}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.trashWrap}>
            <Trash></Trash>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  pageWrap: {
    backgroundColor: "#FFFFFF",
  },
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
  camWrapSvg: {
    position: "absolute",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
  },
  photoTitle: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    marginBottom: 32,
  },
  inputTitle: {
    height: 50,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputTitleFirst: {
    marginTop: 16,
    paddingLeft: 28,
  },
  mapPin: {
    position: "absolute",
    bottom: 95,
  },
  btn: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 50,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 128,
  },
  btnShowText: {
    color: "#BDBDBD",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  trashWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    ...Platform.select({
      ios: {
        marginTop: 250,
      },
      android: {
        marginTop: 148,
      },
    }),
  },
  camReverse: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flex: 0,
    bottom: 10,
    left: 10,
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
  },
});
