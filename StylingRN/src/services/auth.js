import { Platform } from "react-native";

const LOGIN_URL = Platform.OS === "web" && __DEV__
  ? "/api/auth/login/GLSC"
  : "http://192.168.10.69:4000/auth/login/GLSC";

export async function login({ email, password }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email: email.trim(), password }),
      signal: controller.signal,
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      const message = Array.isArray(data?.message)
        ? data.message.filter((item) => typeof item === "string").join("\n")
        : data?.message;
      throw new Error(
        typeof message === "string" && message
          ? message
          : "Sign in failed. Check your email and password and try again.",
      );
    }
    if (typeof data?.accessToken !== "string" || !data.accessToken || !data.user) {
      throw new Error("The server returned an invalid login response. Please try again.");
    }
    return { accessToken: data.accessToken, user: data.user };
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Sign in timed out. Please try again.");
    }
    if (error instanceof TypeError) {
      throw new Error("Cannot reach the login server. Check your connection and make sure you are on the server's local network.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
