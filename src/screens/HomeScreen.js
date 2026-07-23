import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from "react-native";

import {
    Ionicons,
    MaterialIcons,
    Feather,
    FontAwesome5,
} from "@expo/vector-icons";

const HomeScreen = () => {

    return (

        <SafeAreaView style={styles.container}>

            {/* Header */}

            < View style={styles.header} >

                <Ionicons
                    name="menu"
                    size={28}
                    color="#000"
                />

                <Ionicons
                    name="notifications-outline"
                    size={28}
                    color="#000"
                />

            </View >
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >

                {/* Welcome Text */}

                <Text style={styles.helloText}>
                    Hello, Rider! 👋
                </Text>

                <Text style={styles.welcomeText}>
                    Welcome back
                </Text>



                {/* RideFlow Card */}


                <View style={styles.passportCard}>

                    <View>

                        <Text style={styles.cardTitle}>
                            RideFlow Passport
                        </Text>

                        <Text style={styles.cardSubTitle}>
                            Your digital document wallet
                        </Text>


                        <TouchableOpacity
                            style={styles.viewButton}
                        >

                            <Text style={styles.viewButtonText}>
                                View My Documents
                            </Text>

                        </TouchableOpacity>

                    </View>


                    <View>

                        <Ionicons
                            name="shield-checkmark"
                            size={70}
                            color="#7FFFD4"
                        />

                    </View>

                </View>



                {/* Quick Actions */}


                <Text style={styles.sectionTitle}>
                    Quick Actions
                </Text>


                <View style={styles.quickContainer}>

                    <TouchableOpacity style={styles.quickCard}>

                        <MaterialIcons
                            name="folder"
                            size={28}
                            color="#16A34A"
                        />

                        <Text style={styles.quickText}>
                            My Documents
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.quickCard}>

                        <Ionicons
                            name="add-circle"
                            size={28}
                            color="#2563EB"
                        />

                        <Text style={styles.quickText}>
                            Add Document
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.quickCard}>

                        <Ionicons
                            name="person-circle"
                            size={28}
                            color="#7C3AED"
                        />

                        <Text style={styles.quickText}>
                            Profile
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.quickCard}>

                        <Feather
                            name="maximize"
                            size={28}
                            color="#F97316"
                        />

                        <Text style={styles.quickText}>
                            Scan QR
                        </Text>

                    </TouchableOpacity>

                </View>



                {/* Document Overview */}



                <View style={styles.documentHeader}>

                    <Text style={styles.sectionTitle}>
                        Document Overview
                    </Text>


                    <TouchableOpacity>

                        <Text style={styles.viewAll}>
                            View All
                        </Text>

                    </TouchableOpacity>

                </View>



                <View style={styles.documentContainer}>


                    <View style={styles.overViewCard}>

                        <Text style={styles.smallTitle}>
                            Total
                        </Text>

                        <Text style={styles.number}>
                            6
                        </Text>

                    </View>



                    <View style={styles.overViewCard}>

                        <Text
                            style={[
                                styles.smallTitle,
                                { color: "green" }
                            ]}
                        >
                            Valid
                        </Text>

                        <Text style={styles.number}>
                            5
                        </Text>

                    </View>



                    <View style={styles.overViewCard}>

                        <Text
                            style={[
                                styles.smallTitle,
                                { color: "orange" }
                            ]}
                        >
                            Expiring
                        </Text>

                        <Text style={styles.number}>
                            1
                        </Text>

                    </View>



                    <View style={styles.overViewCard}>

                        <Text
                            style={[
                                styles.smallTitle,
                                { color: "red" }
                            ]}
                        >
                            Expired
                        </Text>

                        <Text style={styles.number}>
                            0
                        </Text>

                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>

    );
};

export default HomeScreen;



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 18,
        paddingTop: 40,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    helloText: {
        fontSize: 22,
        marginTop: 25,
        color: "#444",
    },

    welcomeText: {
        fontSize: 38,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 25,
    },



    passportCard: {
        backgroundColor: "#16A34A",
        borderRadius: 20,
        padding: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 4,
    },


    cardTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
    },

    cardSubTitle: {
        color: "#E5E5E5",
        marginTop: 5,
        fontSize: 16,
    },

    viewButton: {
        backgroundColor: "#fff",
        marginTop: 18,
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 12,
        alignSelf: "flex-start",
    },

    viewButtonText: {
        fontWeight: "700",
        color: "#16A34A",
    },



    sectionTitle: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 30,
        marginBottom: 18,
    },



    quickContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },


    quickCard: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 22,
        elevation: 2,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#EFEFEF",
    },


    quickText: {
        marginTop: 12,
        fontWeight: "600",
        fontSize: 16,
    },



    documentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },



    viewAll: {
        color: "#16A34A",
        fontWeight: "700",
        fontSize: 18,
        marginTop: 15,
    },


    documentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },



    overViewCard: {
        width: "23%",
        backgroundColor: "#FAFAFA",
        borderRadius: 15,
        paddingVertical: 22,
        alignItems: "center",
        elevation: 1,
    },


    smallTitle: {
        color: "#555",
        fontSize: 14,
        fontWeight: "600",
    },


    number: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
    },

});