import { Image, Text, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

 
export default function Login() {
  return (
    <View style={{ backgroundColor: "#131212", flex: 1, padding: 20 }}>
      <Image
        source={require("../../assets/images/logo-gold.png")}
        style={Styles.imagem}
      />
      <Text style={styles.title}>Login concluído com sucesso!!!</Text>
      
    </View>
  );
}
 
const Styles = StyleSheet.create({
  imagem: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginVertical: 20,
  },
});
 
const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    marginVertical: 20,
  },
});