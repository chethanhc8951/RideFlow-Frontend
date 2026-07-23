import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";

import {
    Feather,
    Ionicons,
    MaterialIcons,
    AntDesign,
} from "@expo/vector-icons";

export default function ProfileScreen() {
    return (


        <SafeAreaView style={styles.container}>

            {/* Header */}

            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={26} color="black" />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>My Profile</Text>

                <TouchableOpacity>
                    <Feather name="edit-2" size={22} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >

                {/* Profile Card */}

                <View style={styles.profileCard}>
                    <View style={styles.greenBackground} />

                    <Image
                        source={{
                            uri: "https://i.pravatar.cc/300",
                        }}
                        style={styles.profileImage}
                    />

                    <View style={styles.waveContainer} />

                    <Text style={styles.name}>Rider One</Text>

                    <Text style={styles.email}>rider.one@email.com</Text>

                    <View style={styles.verifiedContainer}>
                        <AntDesign
                            name="checkcircle"
                            size={16}
                            color="#1B9C56"
                        />
                        <Text style={styles.verifiedText}>Verified</Text>
                    </View>
                </View>

                {/* Menu Items */}

                <View style={styles.menuContainer}>
                    <MenuItem
                        icon={<Feather name="user" size={22} color="#2563EB" />}
                        title="Personal Information"
                    />

                    <MenuItem
                        icon={
                            <MaterialIcons
                                name="security"
                                size={22}
                                color="#2563EB"
                            />
                        }
                        title="Account & Security"
                    />

                    <MenuItem
                        icon={
                            <Ionicons
                                name="notifications-outline"
                                size={22}
                                color="#2563EB"
                            />
                        }
                        title="Notification Settings"
                    />

                    <MenuItem
                        icon={
                            <Feather
                                name="help-circle"
                                size={22}
                                color="#2563EB"
                            />
                        }
                        title="Help & Support"
                    />

                    <MenuItem
                        icon={
                            <Ionicons
                                name="information-circle-outline"
                                size={22}
                                color="#2563EB"
                            />
                        }
                        title="About RideFlow Passport"
                        showBorder={false}
                    />
                </View>

                {/* Logout Button */}

                <TouchableOpacity style={styles.logoutButton}>
                    <MaterialIcons name="logout" size={24} color="#EF4444" />

                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}


/*-----------------------------------*/
/*           MENU COMPONENT          */
/*-----------------------------------*/

const MenuItem = ({ icon, title, showBorder = true }) => (
    <TouchableOpacity
        style={[
            styles.menuItem,
            !showBorder && { borderBottomWidth: 0 },
        ]}
    >
        <View style={styles.leftContent}>
            {icon}
            <Text style={styles.menuText}>{title}</Text>
        </View>

        <Ionicons
            name="chevron-forward"
            size={22}
            color="#666"
        />
    </TouchableOpacity>
);


/*-----------------------------------*/
/*               STYLES              */
/*-----------------------------------*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
    },

    scrollContainer: {
        paddingTop: 40,
        paddingBottom: 40,
        flexGrow: 1,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 15,
        backgroundColor: "#F7F7F7",
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: "700",
    },

    /* Profile Card */

    profileCard: {
        marginHorizontal: 15,
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 20,
        backgroundColor: "#fff",
    },

    greenBackground: {
        width: "100%",
        height: 150,
        backgroundColor: "#1B9C56",
    },

    waveContainer: {
        position: "absolute",
        top: 115,
        width: "120%",
        height: 80,
        backgroundColor: "#fff",
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
    },

    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 4,
        borderColor: "#fff",
        position: "absolute",
        top: 55,
    },

    name: {
        fontSize: 32,
        fontWeight: "700",
        marginTop: 18,
    },

    email: {
        fontSize: 18,
        color: "#666",
        marginTop: 5,
    },

    verifiedContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#DFF7E9",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 12,
        marginTop: 15,
        marginBottom: 20,
    },

    verifiedText: {
        color: "#1B9C56",
        fontWeight: "600",
        marginLeft: 6,
        fontSize: 16,
    },

    /* Menu */

    menuContainer: {
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginTop: 18,
        borderRadius: 18,
        overflow: "hidden",
    },

    menuItem: {
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#EAEAEA",
    },

    leftContent: {
        flexDirection: "row",
        alignItems: "center",
    },

    menuText: {
        fontSize: 19,
        marginLeft: 15,
        color: "#222",
        fontWeight: "500",
    },

    /* Logout */

    logoutButton: {
        height: 65,
        marginHorizontal: 15,
        marginTop: 40,
        marginBottom: 30, // add this
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: "#EF4444",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    logoutText: {
        color: "#EF4444",
        fontSize: 22,
        fontWeight: "700",
        marginLeft: 10,
    },
});