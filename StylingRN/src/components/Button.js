import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../theme";
export default function Button({ title, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
    >
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.arrow}>→</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    minHeight: 54,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: { color: "#fff", fontWeight: "600", fontSize: 15 },
  arrow: { color: "#fff", fontSize: 23 },
});
