// import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StatusBar} from "react-native";
import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Modal,
} from "react-native";
import { useState } from "react";

const logoUrl = require("./assets/splash-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" />
      <Button
        title="Click Me"
        // onPress={() => {
        //   alert("Button Clicked");
        // }}
        onPress={() => setModalVisible(true)}
        color="orange"
      />
      <ScrollView>
        {/* <Text style={{ color: "white" }}>Hello World</Text> */}
        {/* <Pressable onPress={() => console.log("Image Pressed")}>
          <Image source={logoUrl} style={{ width: 200, height: 200 }} />
        </Pressable> */}
        {/*  <Image source={"https://picsum.photos/200"} style={{ width: 200, height: 200 }} />
      <Image source={{uri: "https://picsum.photos/200"}} style={{ width: 200, height: 200 }} /> */}
        {/* <ImageBackground source={logoUrl} style={{ width: 300, height: 300 }}>
          <Text>Hello World</Text>
        </ImageBackground>
        <Pressable onPress={() => console.log("Text Pressed")}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sheets. It has survived not only many decades, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised thanks to these sheets and more recently with
            desktop publishing software like Aldus PageMaker and Microsoft Word
            including versions of Lorem Ipsum.
          </Text>
        </Pressable>
        <Image source={logoUrl} style={{ width: 300, height: 300 }} /> */}
      </ScrollView>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <View style={{ flex: 1, backgroundColor: "Black", padding: 50 }}>
          <Text>Modal Opened</Text>
          <Button
            title="Modal Close"
            onPress={() => setModalVisible(false)}
            color="orange"
          />
        </View>
      </Modal>
    </View>
  );
}
