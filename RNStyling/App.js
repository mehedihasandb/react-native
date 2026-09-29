import { StyleSheet, View } from "react-native";
import Box from "./component/box";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Box style={{ backgroundColor: "#f09dce", alignSelf: "flex-start" }}>Box-1</Box>
      <Box style={{ backgroundColor: "#edfa00", alignSelf: "center" }}>Box-2</Box>
      <Box style={{ backgroundColor: "#1f6661", alignSelf: "flex-end" }}>Box-3</Box>
      <Box style={{ backgroundColor: "#220c19", alignSelf: "stretch" }}>Box-4</Box> */}
      {/* <Box style={{ backgroundColor: "#530611", flexShrink: 2 }}>Box-7</Box>
            <Box style={{ backgroundColor: "#51bd13", flexShrink: 1 }}>Box-5</Box> */}
      {/* <Box style={{ backgroundColor: "#0ea0c5", height: 150, flex: 1 }}>Box-6</Box>
      <Box style={{ backgroundColor: "#51bd13", flexBasis: 150, flex: 1 }}>Box-5</Box> */}
      <Box
        style={{
          backgroundColor: "#530611",
          position: "absolute",
          top: 50,
          left: 50,
        }}
      >
        Box-1
      </Box>
      <Box style={{ backgroundColor: "#51bd13" }}>Box-2</Box>
      <Box style={{ backgroundColor: "#0ea0c5" }}>Box-3</Box>
      <Box
        style={{
          backgroundColor: "#530611",
          position: "absolute",
          top: 50,
          left: 60,
        }}
      >
        Box-4
      </Box>
      <Box style={{ backgroundColor: "#51bd13" }}>Box-5</Box>
      <Box style={{ backgroundColor: "#0ea0c5" }}>Box-6</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    // flexDirection: "row",
    // alignItems: "baseline",
    // height: 300,
    // flexWrap: "wrap",
    // rowGap: 20,
    // columnGap: 20,
    // gap: 10,
    // alignContent: "space-around",
    // flexDirection: "row",
    // alignItems: "center",
    marginTop: 50,
    borderWidth: 5,
    borderColor: "red",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
