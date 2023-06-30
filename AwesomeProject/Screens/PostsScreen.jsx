import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MssageCircle from "../images/message-circle.svg";
import MapPin from "../images/map-pin.svg";
export default function PostsScreen({ navigation }) {
  return (
    <>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.6}>
          <Icon style={styles.logOut} name="log-out-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileImage}>{/* <Image source={}  /> */}</View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Igor Vinnik</Text>
            <Text style={styles.profileEmail}>axelocc123@gmail.com</Text>
          </View>
        </View>
        <View>
          <Image source={require("../images/rect.jpg")} style={styles.img} />
          <Text style={styles.titleImg}>Ліс</Text>
          <View style={styles.infoAllWrap}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate("CommentsScreen");
              }}
            >
              <View style={styles.infoWrap}>
                <MssageCircle></MssageCircle>
                <Text style={styles.infoText}>8</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.infoWrap}>
              <MapPin></MapPin>
              <Text style={[styles.infoText, styles.infoTextLocation]}>
                Ukraine
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  titleWrap: {
    flex: 0,

    alignItems: "center",
    width: "100%",
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    color: "#212121",
    fontSize: 17,
    fontFamily: "Roboto-Bold",
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  profile: {
    marginBottom: 16,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    overflow: "hidden",
  },
  profilePhoto: {
    width: 60,
    height: 60,
  },

  profileName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  profileEmail: {
    fontSize: 10,
  },

  logOut: {
    color: "#BDBDBD",
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
    textDecorationLine: "underline",
  },
});
