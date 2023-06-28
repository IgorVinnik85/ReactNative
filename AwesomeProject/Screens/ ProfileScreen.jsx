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
  Image,
} from "react-native";
import LogOutSvg from "../images/log-out.svg";
import PhotoSvg from "../images/add-2.svg";
import MssageCircle from "../images/message-circle.svg";
import ThumbsUp from "../images/thumbs-up.svg";
import MapPin from "../images/map-pin.svg";

import Icon from "react-native-vector-icons/Ionicons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.profileWrap}>
          <TouchableOpacity style={styles.logOutSvg} activeOpacity={0.6}>
            <LogOutSvg></LogOutSvg>
          </TouchableOpacity>
          <View style={styles.photoWrapper}>
            <TouchableOpacity style={styles.photoSvg} activeOpacity={0.6}>
              <PhotoSvg></PhotoSvg>
            </TouchableOpacity>

            <Image />
          </View>
          <Text style={styles.title}>Natali Romanova</Text>
          <View>
            <Image source={require("../images/rect.jpg")} style={styles.img} />
            <Text style={styles.titleImg}>Ліс</Text>
            <View style={styles.infoAllWrap}>
              <View style={styles.infoWrap}>
                <MssageCircle></MssageCircle>
                <Text style={styles.infoText}>8</Text>
              </View>
              <View style={[styles.infoWrap, styles.secondInfo]}>
                <ThumbsUp></ThumbsUp>
                <Text style={styles.infoText}>153</Text>
              </View>
              <View style={styles.infoWrap}>
                <MapPin></MapPin>
                <Text style={[styles.infoText, styles.infoTextLocation]}>
                  Ukraine
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.btnWrap}>
            <View style={styles.btnWrapIcons}>
              <TouchableOpacity activeOpacity={0.6}>
                <Icon name="grid-outline" size={30} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.addOutline} activeOpacity={0.6}>
                <View style={styles.addOutlineWrap}>
                  <Icon
                    style={styles.gridOutline}
                    name="add-outline"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Icon style={styles.person} name="person-outline" size={30} />
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
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
  profileWrap: {
    // bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // marginTop: 100,
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
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  logOutSvg: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  photoSvg: {
    position: "absolute",
    bottom: 9,
    right: -17,
  },
  img: {
    width: "auto",
    height: 240,
    marginBottom: 8,
  },
  titleImg: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    marginBottom: 8,
  },
  infoWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  infoAllWrap: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 46,
  },
  secondInfo: {
    marginRight: 140,
    },
    infoTextLocation: {
      textDecorationLine: 'underline',
  },
  btnWrap: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#E8E8E8",
    // height: 83,
    borderTopWidth: 1,
    paddingTop: 9,
    paddingBottom: 34,
  },
  logOutBottom: {
    // marginRight: 90,
  },
  addOutline: {
    color: "#FF6C00",
  },
  addOutlineWrap: {
    backgroundColor: "#FF6C00",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 40,
    // marginRight: 39,
  },
  gridOutline: {
    color: "#FFFFFF",
  },
  person: {
    //   marginRight: 0,
  },
  btnWrapIcons: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 64,
  },
  addButton: {
    position: "absolute",
    bottom: 7,
    right: 16,
  },
});
