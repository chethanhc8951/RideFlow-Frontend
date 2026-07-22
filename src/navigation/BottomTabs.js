import React from "react";

import { createBottomTabNavigator }
from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import DocumentsScreen from "../screens/DocumentsScreen";
import AddBikeScreen from "../screens/AddBikeScreen";
import AlertsScreen from "../screens/AlertsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    return (

        <Tab.Navigator
            screenOptions={{

                headerShown:false,

                tabBarActiveTintColor:"#10B981",

                tabBarInactiveTintColor:"gray",

            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                        name="home-outline"
                        size={size}
                        color={color}
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Documents"
                component={DocumentsScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                        name="document-text-outline"
                        size={size}
                        color={color}
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Add"
                component={AddBikeScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                        name="add-circle"
                        size={size+8}
                        color="#10B981"
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Alerts"
                component={AlertsScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                        name="notifications-outline"
                        size={size}
                        color={color}
                        />
                    ),
                }}
            />


            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Ionicons
                        name="person-outline"
                        size={size}
                        color={color}
                        />
                    ),
                }}
            />

        </Tab.Navigator>

    );

};

export default BottomTabs;