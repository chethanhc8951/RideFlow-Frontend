import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

            <ImageBackground
                source={require('../../assets/motorcycle-background.png')} // Add your image here
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    {/* Logo & Title */}
                    <View style={styles.logoContainer}>

                        <View style={styles.headerRow}>

                            <View style={styles.logo}>
                                <Text style={styles.logoText}>R</Text>
                            </View>

                            <View>
                                <Text style={styles.appName}>
                                    RideFlow
                                </Text>

                                <Text style={styles.subtitle}>
                                    Passport
                                </Text>
                            </View>

                        </View>

                    </View>

                    {/* Tagline */}
                    <View style={styles.taglineContainer}>

                        <Text style={styles.tagline}>
                            All your ride documents
                        </Text>

                        <Text style={styles.taglineHighlight}>
                            in one secure place
                        </Text>

                    </View>

                    {/* Spacer */}
                    <View style={styles.spacer} />

                    {/* Buttons */}
                    <TouchableOpacity style={styles.getStartedButton} onPress={() =>
                        navigation.navigate("Main")
                    } activeOpacity={0.9}>
                        <Text style={styles.getStartedText}>Get Started</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} activeOpacity={0.9}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        width,
        height,
    },
    overlay: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 50,
        justifyContent: 'space-between',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        backgroundColor: '#10b981',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#10b981',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    logoText: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight: '700',
    },
    appName: {
        color: '#000',
        fontSize: 34,
        fontWeight: '700',
        marginLeft: 12,
    },
    subtitle: {
        color: '#000',
        fontSize: 20,
        marginLeft: 70,
        marginTop: -4,
        fontWeight: '500',
    },
    taglineContainer: {
        alignItems: 'center',
        marginTop: 25,
    },
    tagline: {
        color: '#000',
        fontSize: 19,
        fontWeight: '500',
        textAlign: 'center',
    },
    taglineHighlight: {
        color: '#10b981',
        fontSize: 19,
        fontWeight: '700',
        marginTop: 5,
    },
    spacer: {
        flex: 1,
    },
    getStartedButton: {
        backgroundColor: '#10b981',
        borderRadius: 14,
        paddingVertical: 18,
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
    getStartedText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    loginButton: {
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 14,
        paddingVertical: 18,
        alignItems: 'center',
    },
    loginText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default WelcomeScreen;