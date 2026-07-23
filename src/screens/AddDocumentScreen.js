import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function AddDocumentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Document</Text>

        {/* Empty View for Center Alignment */}
        <View style={{ width: 26 }} />
      </View>

      {/* Scrollable Content */}

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress Indicator */}

        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <View style={styles.completedCircle}>
              <AntDesign name="check" size={16} color="white" />
            </View>
            <Text style={styles.activeStep}>Select Type</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.progressItem}>
            <View style={styles.activeCircle}>
              <Text style={styles.circleText}>2</Text>
            </View>
            <Text style={styles.activeStep}>Upload</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.progressItem}>
            <View style={styles.inactiveCircle}>
              <Text style={styles.inactiveText}>3</Text>
            </View>
            <Text style={styles.inactiveStep}>Details</Text>
          </View>
        </View>

        {/* Document Type */}

        <Text style={styles.heading}>Document Type</Text>

        <TouchableOpacity style={styles.documentTypeCard}>
          <View style={styles.leftContent}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="shield-check"
                size={28}
                color="#7C5CC4"
              />
            </View>

            <Text style={styles.documentName}>Insurance</Text>
          </View>

          <Ionicons
            name="chevron-down"
            size={24}
            color="#555"
          />
        </TouchableOpacity>

        {/* Upload Section */}

        <Text style={styles.heading}>Upload Document</Text>

        <TouchableOpacity style={styles.uploadBox}>
          <MaterialCommunityIcons
            name="cloud-upload-outline"
            size={65}
            color="#1B9C56"
          />

          <Text style={styles.uploadTitle}>
            Tap to upload or drag and drop
          </Text>

          <Text style={styles.uploadSubtitle}>
            PDF, JPG or PNG (Max 5MB)
          </Text>
        </TouchableOpacity>

        {/* Uploaded File */}

        <View style={styles.fileCard}>
          <View style={styles.leftContent}>
            <MaterialCommunityIcons
              name="file-pdf-box"
              size={38}
              color="#EF4444"
            />

            <View style={{ marginLeft: 12 }}>
              <Text style={styles.fileName}>
                insurance_policy.pdf
              </Text>

              <Text style={styles.fileSize}>
                2.4 MB
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Ionicons
              name="close"
              size={28}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        {/* Next Button */}

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 40,
    },

  scrollContainer: {
    paddingBottom: 40,
  },

  /* Header */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },

  /* Progress Bar */

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  progressItem: {
    alignItems: "center",
  },

  completedCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1B9C56",
    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1B9C56",
    justifyContent: "center",
    alignItems: "center",
  },

  inactiveCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: "#D5D5D5",
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    color: "#fff",
    fontWeight: "700",
  },

  inactiveText: {
    color: "#777",
    fontWeight: "700",
  },

  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 8,
    marginBottom: 20,
  },

  activeStep: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

  inactiveStep: {
    marginTop: 8,
    fontSize: 14,
    color: "#777",
  },

  /* Headings */

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },

  /* Document Type */

  documentTypeCard: {
    height: 72,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E7E7E7",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F3EEFF",
    justifyContent: "center",
    alignItems: "center",
  },

  documentName: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "600",
  },

  /* Upload Box */

  uploadBox: {
    height: 190,
    borderRadius: 18,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#DADADA",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  uploadTitle: {
    fontSize: 18,
    color: "#444",
    marginTop: 15,
  },

  uploadSubtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#777",
  },

  /* Uploaded File */

  fileCard: {
    height: 85,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ECECEC",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  fileName: {
    fontSize: 18,
    fontWeight: "600",
  },

  fileSize: {
    marginTop: 4,
    fontSize: 15,
    color: "#777",
  },

  /* Next Button */

  nextButton: {
    height: 60,
    backgroundColor: "#1B9C56",
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
});