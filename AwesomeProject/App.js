import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { LoginScreen } from './Screens/LoginScreen';
import { PostsScreen } from './Screens/PostsScreen';

export default function App() {
const [fontsLoaded] = useFonts({
  "Roboto-Regular": require("./fonts/Roboto-Regular.ttf"),
  "Roboto-Medium": require("./fonts/Roboto-Medium.ttf"),
  "Roboto-Bold": require("./fonts/Roboto-Bold.ttf"),
});
  
   if (!fontsLoaded) {
     return null;
   }

  return (
    <>
      {/* <View style={styles.container}> */}
      <RegistrationScreen />
      {/* <PostsScreen/> */}
      {/* <LoginScreen/> */}
        {/* // <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
    
      {/* </View> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
