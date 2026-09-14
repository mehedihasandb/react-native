import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme";

export default function FormField({
  label,
  error,
  password = false,
  ...props
}) {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.row,
          focused && { borderColor: colors.primary },
          error && { borderColor: colors.error },
        ]}
      >
        <TextInput
          {...props}
          accessibilityLabel={label}
          placeholderTextColor={colors.muted}
          style={styles.input}
          secureTextEntry={password && !visible}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {password && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={visible ? "Hide password" : "Show password"}
            onPress={() => setVisible(!visible)}
            style={styles.toggle}
          >
            <Text style={styles.toggleText}>{visible ? "Hide" : "Show"}</Text>
          </Pressable>
        )}
      </View>
      {error && (
        <Text accessibilityRole="alert" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  field: { gap: 8, marginBottom: 18 },
  label: { color: colors.ink, fontWeight: "600", fontSize: 13 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: "#FAFBF9",
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 16,
    color: colors.ink,
    fontSize: 15,
  },
  toggle: { padding: 15 },
  toggleText: { color: colors.primary, fontWeight: "600", fontSize: 12 },
  error: { color: colors.error, fontSize: 12 },
});
