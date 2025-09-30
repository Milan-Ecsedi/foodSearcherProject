import { Tabs } from "expo-router";
import React from "react";
import TabBar from "./components/TabBar";


export default function RootLayout() {
  return <Tabs
  tabBar={props => <TabBar {...props}/>}>
    <Tabs.Screen
    name="index"
    options={{
      title:"Home"
    }}/>
    <Tabs.Screen
    name="notification"
    options={{
      title:"Notification"
    }}/>
    <Tabs.Screen
    name="popular"
    options={{
      title:"Popular"
    }}/>
    <Tabs.Screen
    name="profile"
    options={{
      title:"Profile"
    }}/>
  </Tabs>
}
