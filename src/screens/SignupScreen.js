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

import { Feather } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Title */}

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Create Account
                    </Text>

                    <Text style={styles.subTitle}>
                        Create your RideFlow Passport account
                        and securely manage all your vehicle
                        documents.
                    </Text>
                </View>

                {/* Full Name */}

                <Text style={styles.label}>
                    Full Name
                </Text>

                <View style={styles.inputContainer}>
                    <Feather
                        name="user"
                        size={20}
                        color="#777"
                    />

                    <TextInput
                        placeholder="Enter your full name"
                        style={styles.input}
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>

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
                        keyboardType="email-address"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Phone */}

                <Text style={styles.label}>
                    Mobile Number
                </Text>

                <View style={styles.inputContainer}>
                    <Feather
                        name="phone"
                        size={20}
                        color="#777"
                    />

                    <TextInput
                        placeholder="Enter mobile number"
                        keyboardType="phone-pad"
                        style={styles.input}
                        value={phone}
                        onChangeText={setPhone}
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
                        placeholder="Enter password"
                        secureTextEntry={showPassword}
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity
                        onPress={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        <Feather
                            name={
                                showPassword
                                    ? "eye-off"
                                    : "eye"
                            }
                            size={20}
                            color="#777"
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password */}

                <Text style={styles.label}>
                    Confirm Password
                </Text>

                <View style={styles.inputContainer}>
                    <Feather
                        name="lock"
                        size={20}
                        color="#777"
                    />

                    <TextInput
                        placeholder="Confirm password"
                        secureTextEntry={showConfirmPassword}
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <TouchableOpacity
                        onPress={() =>
                            setShowConfirmPassword(
                                !showConfirmPassword
                            )
                        }
                    >
                        <Feather
                            name={
                                showConfirmPassword
                                    ? "eye-off"
                                    : "eye"
                            }
                            size={20}
                            color="#777"
                        />
                    </TouchableOpacity>
                </View>

                {/* Signup Button */}

                <TouchableOpacity
                    style={styles.signupButton}
                >
                    <Text style={styles.signupText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                {/* Login */}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already have an account?
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.loginText}>
                            {" "}
                            Login
                        </Text>
                    </TouchableOpacity>
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
        padding: 20,
        paddingBottom: 40,
    },

    titleContainer: {
        marginTop: 30,
        marginBottom: 30,
    },

    title: {
        fontSize: 34,
        fontWeight: "700",
        color: "#222",
    },

    subTitle: {
        marginTop: 10,
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        marginTop: 15,
    },

    inputContainer: {
        height: 58,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#E3E3E3",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },

    input: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
    },

    signupButton: {
        height: 58,
        backgroundColor: "#1B9C56",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    signupText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
    },

    footerText: {
        fontSize: 16,
        color: "#666",
    },

    loginText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1B9C56",
    },
});