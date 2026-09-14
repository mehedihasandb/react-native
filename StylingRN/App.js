import { StatusBar } from "expo-status-bar";
import AuthScreen from "./src/screens/AuthScreen";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      {/* <StatusBar style="dark" />
      <AuthScreen /> */}
      <View style={styles.container}>
        <View style={[styles.box, styles.lightblue]}>
          <Text style={{borderRadius: 5, backgroundColor: "red"}}>hello</Text>
        </View>
        <View style={[styles.box, styles.lightgreen]}>
          <Text>hello</Text>
        </View>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fd4b4b",
    padding: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    width: "25%",
    height: "25%",
    // padding: 10,
    paddingHorizontal: 50,
    paddingVertical: 50,
    marginVertical: 50,
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 10,

  },
  lightblue: {
    backgroundColor: "#add8e6",
  },
  lightgreen: {
    backgroundColor: "#90ee90",
  },
});
