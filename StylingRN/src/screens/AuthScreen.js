import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { colors } from "../theme";
import { validateAuth } from "../utils/validation";

const empty = { name: "", email: "", password: "", confirmPassword: "" };
export default function AuthScreen() {
  const wide = useWindowDimensions().width >= 900;
  const [mode, setMode] = useState("login");
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const register = mode === "register";
  function switchMode(next) {
    setMode(next);
    setValues(empty);
    setErrors({});
    setMessage("");
  }
  function change(field, value) {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setMessage("");
  }
  function submit() {
    const nextErrors = validateAuth(values, register);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setMessage(
      register
        ? `Looking good, ${values.name.trim()}! Form validated. Connect a backend to create your account.`
        : "Form validated. Connect an authentication backend to sign in securely.",
    );
    setValues((previous) => ({
      ...previous,
      password: "",
      confirmPassword: "",
    }));
  }
  const fieldProps = (field) => ({
    value: values[field],
    onChangeText: (value) => change(field, value),
    error: errors[field],
  });
  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.shell, wide && styles.wideShell]}>
          {/* <View style={[styles.story, wide && styles.wideStory]}>
            <View style={styles.brand}>
              <View style={styles.logo}>
                <Text style={styles.glyph}>n</Text>
              </View>
              <Text style={styles.brandText}>northstar.</Text>
            </View>
            <View style={styles.storyBody}>
              <Text style={styles.eyebrow}>
                A LITTLE SPACE. A BIG BEGINNING.
              </Text>
              <Text
                style={[
                  styles.headline,
                  !wide && { fontSize: 38, lineHeight: 44 },
                ]}
              >
                Good things{"\n"}start here.
              </Text>
              <Text style={styles.description}>
                Your ideas, your people, your next chapter.{"\n"}A place to make
                it all happen.
              </Text>
              {wide && (
                <View style={styles.art}>
                  <View style={styles.orbit} />
                  <View style={styles.artCard}>
                    <Text style={styles.star}>✦</Text>
                    <Text style={styles.artTitle}>Room to grow.</Text>
                    <Text style={styles.artCaption}>
                      One small step at a time.
                    </Text>
                    <View style={styles.artLine} />
                    <View style={[styles.artLine, { width: "55%" }]} />
                  </View>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>↗ Your next chapter</Text>
                  </View>
                </View>
              )}
            </View>
            <Text style={styles.storyFooter}>
              MADE FOR YOUR EVERYDAY, AND YOUR SOMEDAY.
            </Text>
          </View> */}
          <View style={[styles.formSide, wide && { flex: 1 }]}>
            <View style={styles.form}>
              <View style={styles.tabs}>
                {["login", "register"].map((tab) => (
                  <Pressable
                    key={tab}
                    accessibilityRole="tab"
                    accessibilityState={{ selected: mode === tab }}
                    onPress={() => switchMode(tab)}
                    style={[styles.tab, mode === tab && styles.activeTab]}
                  >
                    <Text
                      style={[
                        styles.tabText,
                        mode === tab && { color: colors.primary },
                      ]}
                    >
                      {tab === "login" ? "Sign in" : "Create account"}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <Text style={styles.eyebrow}>
                {register ? "YOUR NEXT CHAPTER" : "YOUR PERSONAL SPACE"}
              </Text>
              <Text style={styles.title}>
                {register ? "Make yourself at home." : "Welcome back."}
              </Text>
              <Text style={styles.subtitle}>
                {register
                  ? "A fresh start is just a few details away."
                  : "Good to see you again. Let’s pick up where you left off."}
              </Text>
              {register && (
                <FormField
                  label="Full name"
                  placeholder="Alex Morgan"
                  autoComplete="name"
                  {...fieldProps("name")}
                />
              )}
              <FormField
                label="Email address"
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                {...fieldProps("email")}
              />
              <FormField
                label="Password"
                placeholder={
                  register
                    ? "Create a password (8+ characters)"
                    : "Enter your password"
                }
                password
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={register ? "new-password" : "current-password"}
                returnKeyType={register ? "next" : "done"}
                onSubmitEditing={register ? undefined : submit}
                {...fieldProps("password")}
              />
              {register && (
                <FormField
                  label="Confirm password"
                  placeholder="Enter your password again"
                  password
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  returnKeyType="done"
                  onSubmitEditing={submit}
                  {...fieldProps("confirmPassword")}
                />
              )}
              {message ? (
                <View style={styles.notice}>
                  <Text accessibilityRole="alert" style={styles.noticeText}>
                    {message}
                  </Text>
                </View>
              ) : null}
              <Button
                title={register ? "Create account" : "Sign in"}
                onPress={submit}
              />
              <View style={styles.switchRow}>
                <Text style={styles.switchText}>
                  {register ? "Already have an account?" : "New around here?"}
                </Text>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => switchMode(register ? "login" : "register")}
                  style={styles.linkButton}
                >
                  <Text style={styles.link}>
                    {register ? "Sign in" : "Create an account"}
                  </Text>
                </Pressable>
              </View>
              {/* <View style={styles.divider} /> */}
              {/* <Text style={styles.demoNote}>
                DEMO PREVIEW · No account data is saved
              </Text> */}
            </View>
            <Text style={styles.footer}>
              © {new Date().getFullYear()} Northstar. A brighter way forward.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: 48,
    paddingBottom: 32,
  },
  shell: {
    width: "100%",
    maxWidth: 1160,
    alignSelf: "center",
    backgroundColor: colors.surface,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },
  wideShell: { flexDirection: "row", minHeight: 750 },
  story: { backgroundColor: "#EAF0E5", padding: 28, overflow: "hidden" },
  wideStory: { width: "46%", padding: 44, justifyContent: "space-between" },
  brand: { flexDirection: "row", alignItems: "center", gap: 10 },
  logo: {
    backgroundColor: colors.primary,
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  glyph: { color: "#fff", fontSize: 26, fontWeight: "700", marginTop: -4 },
  brandText: {
    fontSize: 23,
    fontWeight: "700",
    letterSpacing: -1,
    color: colors.ink,
  },
  storyBody: { marginTop: 44 },
  eyebrow: {
    fontSize: 10,
    letterSpacing: 1.8,
    fontWeight: "700",
    color: colors.primary,
  },
  headline: {
    fontSize: 58,
    lineHeight: 65,
    letterSpacing: -2,
    fontWeight: "600",
    color: colors.ink,
    marginTop: 16,
  },
  description: {
    color: "#617262",
    fontSize: 15,
    lineHeight: 25,
    marginTop: 20,
  },
  storyFooter: {
    color: "#71806D",
    fontSize: 9,
    letterSpacing: 1.2,
    marginTop: 32,
  },
  art: {
    height: 250,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  orbit: {
    position: "absolute",
    width: 270,
    height: 270,
    borderRadius: 135,
    borderWidth: 1,
    borderColor: "#CEDCC8",
  },
  artCard: {
    width: 220,
    padding: 24,
    backgroundColor: "#FDFEF9",
    borderRadius: 18,
    transform: [{ rotate: "-7deg" }],
    borderWidth: 1,
    borderColor: "#DDE6D5",
  },
  star: { fontSize: 35, color: colors.primary },
  artTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.ink,
    marginTop: 8,
  },
  artCaption: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 6,
    marginBottom: 17,
  },
  artLine: {
    height: 7,
    width: "85%",
    backgroundColor: "#E8EDDF",
    borderRadius: 5,
    marginTop: 8,
  },
  badge: {
    position: "absolute",
    bottom: 22,
    right: 0,
    padding: 14,
    borderRadius: 10,
    backgroundColor: colors.primary,
    transform: [{ rotate: "5deg" }],
  },
  badgeText: { fontSize: 12, color: "#fff", fontWeight: "600" },
  formSide: { padding: 28, justifyContent: "center" },
  form: { width: "100%", maxWidth: 390, alignSelf: "center" },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#F1F3EF",
    borderRadius: 11,
    padding: 4,
    marginBottom: 38,
  },
  tab: { flex: 1, alignItems: "center", paddingVertical: 12, borderRadius: 8 },
  activeTab: { backgroundColor: "#fff" },
  tabText: { color: colors.muted, fontSize: 13, fontWeight: "600" },
  title: {
    fontSize: 30,
    letterSpacing: -1,
    fontWeight: "600",
    color: colors.ink,
    marginTop: 12,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 10,
    marginBottom: 28,
  },
  switchRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    gap: 4,
  },
  switchText: { fontSize: 13, color: colors.muted },
  linkButton: { paddingVertical: 10, paddingHorizontal: 4 },
  link: { color: colors.primary, fontWeight: "600", fontSize: 13 },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 20,
    marginBottom: 20,
  },
  demoNote: {
    color: colors.muted,
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 0.7,
  },
  footer: {
    color: colors.muted,
    fontSize: 10,
    textAlign: "center",
    marginTop: 34,
  },
  notice: {
    backgroundColor: colors.soft,
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
  },
  noticeText: { fontSize: 13, lineHeight: 21, color: colors.primary },
});
