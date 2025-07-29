import { View,} from "react-native";
import React from "react";
import Header from "../components/header";
import VideoComponent from "../components/Video";
 
export default function Dashboard() {
  
  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <Header rota="login" />
      <VideoComponent />
    </View>
  );
}