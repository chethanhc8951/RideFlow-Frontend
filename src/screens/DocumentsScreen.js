import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

const documents = [
  {
    id: "1",
    title: "Driving License",
    number: "DL123456789012",
    expiry: "Expires on 12 Dec 2030",
    color: "#2BA56D",
    icon: "card-account-details",
  },
  {
    id: "2",
    title: "Vehicle Registration",
    number: "KA01AB1234",
    expiry: "Expires on 15 Aug 2028",
    color: "#2196F3",
    icon: "car",
  },
  {
    id: "3",
    title: "Insurance",
    number: "Policy No. INS123456",
    expiry: "Expires on 10 Jan 2026",
    color: "#F5A623",
    icon: "shield-check",
  },
  {
    id: "4",
    title: "Pollution Certificate",
    number: "KA0120220001234",
    expiry: "Valid till 20 Mar 2026",
    color: "#34A853",
    icon: "leaf",
  },
  {
    id: "5",
    title: "RC Book",
    number: "KA01AB1234",
    expiry: "Expires on 15 Aug 2028",
    color: "#F5A623",
    icon: "book-open-page-variant",
  },
  {
    id: "6",
    title: "Permit",
    number: "TP2024KA001234",
    expiry: "Valid till 31 Dec 2024",
    color: "#EF4444",
    icon: "file-document",
  },
];

const tabs = ["All", "Vehicle", "License", "Insurance", "Other"];

export default function DocumentsScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  const renderDocument = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.iconBox, { backgroundColor: `${item.color}20` }]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={28}
          color={item.color}
        />
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.number}>{item.number}</Text>
        <Text style={[styles.expiry, { color: item.color }]}>
          {item.expiry}
        </Text>
      </View>

      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={18} color="#555" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Documents</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Feather name="search" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 15 }}>
            <Entypo
              name="dots-three-vertical"
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Documents */}

      <FlatList
        data={documents}
        keyExtractor={(item) => item.id}
        renderItem={renderDocument}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  tabContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },

  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },

  activeTab: {
    backgroundColor: "#1B9C56",
  },

  tabText: {
    color: "#444",
    fontWeight: "500",
  },

  activeTabText: {
    color: "white",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
    alignItems: "center",
    elevation: 1,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  details: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  number: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
  },

  expiry: {
    fontSize: 14,
    fontWeight: "600",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 8,
    paddingBottom: 5,
  },

  bottomItem: {
    alignItems: "center",
  },

  bottomText: {
    fontSize: 12,
    color: "#666",
    marginTop: 3,
  },

  addButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#1B9C56",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -35,
  },
});