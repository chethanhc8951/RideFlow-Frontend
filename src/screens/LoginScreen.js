import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}

        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Ionicons
              name="document-text"
              size={50}
              color="#1B9C56"
            />
          </View>

          <Text style={styles.title}>
            RideFlow Passport
          </Text>

          <Text style={styles.subTitle}>
            Manage all your vehicle documents
            in one place.
          </Text>
        </View>

        {/* Login Card */}

        <View style={styles.card}>
          <Text style={styles.loginText}>
            Login
          </Text>

          {/* Email */}

          <Text style={styles.label}>
            Email Address
          </Text>

          <View style={styles.inputContainer}>
            <Feather
              name="mail"
              size={20}
              color="#777"
            />

            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password */}

          <Text style={styles.label}>
            Password
          </Text>

          <View style={styles.inputContainer}>
            <Feather
              name="lock"
              size={20}
              color="#777"
            />

            <TextInput
              placeholder="Enter your password"
              secureTextEntry={secureText}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() =>
                setSecureText(!secureText)
              }
            >
              <Feather
                name={
                  secureText
                    ? "eye-off"
                    : "eye"
                }
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </TouchableOpacity>

          {/* Divider */}

          <View style={styles.dividerContainer}>
            <View style={styles.line} />

            <Text style={styles.orText}>
              OR
            </Text>

            <View style={styles.line} />
          </View>

          {/* Google Login */}

          <TouchableOpacity
            style={styles.googleButton}
          >
            <Ionicons
              name="logo-google"
              size={22}
              color="#DB4437"
            />

            <Text style={styles.googleText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Sign Up */}

          <View style={styles.footer}>
            <Text
              style={styles.footerText}
            >
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={() =>
                        navigation.navigate("Signup")}>
              <Text style={styles.signUp}>
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 35,
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E8F7EF",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 18,
    color: "#222",
  },

  subTitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 30,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 22,
  },

  loginText: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 5,
  },

  inputContainer: {
    height: 58,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 14,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    color: "#1B9C56",
    fontWeight: "600",
    marginBottom: 25,
  },

  loginButton: {
    height: 58,
    backgroundColor: "#1B9C56",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E3E3E3",
  },

  orText: {
    marginHorizontal: 15,
    color: "#777",
    fontWeight: "600",
  },

  googleButton: {
    height: 58,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  googleText: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  footerText: {
    color: "#666",
    fontSize: 16,
  },

  signUp: {
    color: "#1B9C56",
    fontWeight: "700",
    fontSize: 16,
  },
});