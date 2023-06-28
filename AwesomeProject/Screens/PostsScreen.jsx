import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function PostsScreen() {
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
      </View>
      {/* <View style={styles.btnWrap}>
        <View style={styles.btnWrapIcons}>
          <TouchableOpacity activeOpacity={0.6}>
            <Icon name="grid-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addOutline} activeOpacity={0.6}>
            <View style={styles.addOutlineWrap}>
              <Icon style={styles.gridOutline} name="add-outline" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <Icon style={styles.person} name="person-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View> */}
    </>
  );
};

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
    backgroundColor: '#FFFFFF',
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
        position: 'absolute',
        bottom: 7,
        right: 16,
  },
});
