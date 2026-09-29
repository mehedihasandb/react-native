import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Button from "./src/components/Button";
import AuthScreen from "./src/screens/AuthScreen";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [session, setSession] = useState(null);
  return (
    <>
      <StatusBar style="dark" />
      {session ? (
        <View style={styles.signedIn}>
          <Text style={styles.signedInTitle}>Signed in successfully</Text>
          <Text style={styles.signedInEmail}>{session.user.email || "Welcome back!"}</Text>
          <Button title="Sign out" onPress={() => setSession(null)} />
        </View>
      ) : (
        <AuthScreen onLogin={setSession} />
      )}
      {/* <View style={styles.container}>
        <View style={styles.boxDarkMode}>
          <Text style={styles.boxText}>Text style Inheritance<Text style={styles.boxBold}>in bold inherit</Text></Text>
        </View>
        <View style={[styles.box, styles.lightblue, styles.boxShadow]}>
          <Text style={{borderRadius: 5, backgroundColor: "red"}}>hello</Text>
        </View>
        <View style={[styles.box, styles.lightgreen, styles.androidShadow]}>
          <Text>hello</Text>
        </View>
      </View> */}
    </>
  );
}

export const styles = StyleSheet.create({
  signedIn: { flex: 1, justifyContent: "center", padding: 28, backgroundColor: "#fff" },
  signedInTitle: { fontSize: 26, fontWeight: "600", marginBottom: 12 },
  signedInEmail: { fontSize: 16, marginBottom: 24 },
  container: {
    flex: 1,
    backgroundColor: "#fd4b4b",
    padding: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  boxDarkMode: {
    backgroundColor: "black",
    // color: "white",
  },
  boxText:{
    color: "white",
  },
  boxBold: {
    fontWeight: "bold",
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
  boxShadow: {
    shadowColor: 'blue',
    shadowOffset: { width: 5, height: 6},
    shadowOpacity: 0.7,
    shadowRadius: 8,

  },
  androidShadow: {
    elevation: 10,
  }
});
