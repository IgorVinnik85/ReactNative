import React from "react";
import PostsScreen from "./PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import Send from "../images/grid.svg";
import New from "../images/new.svg";
import User from "../images/user.svg";
import Trash from "../images/trash.svg";
const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 9,
            paddingHorizontal: 90,
            display: route.name === "New" ? "none" : "flex",
          },
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === "Send") {
              icon = <Send />;
            } else if (route.name === "New") {
              icon = <New />;
            } else if (route.name === "User") {
              icon = <User />;
            }

            return icon;
          },
        })}
      >
        <Tabs.Screen name="Send" component={PostsScreen} />
        <Tabs.Screen name="New" component={CreatePostsScreen} />
        <Tabs.Screen name="User" component={ProfileScreen} />
      </Tabs.Navigator>
    </>
  );
}
