import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform, 
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const roy = require("./assets/profile/jay.jpg");

const ProfileScreen = () => {
  const router = useRouter();

  const profileData = {
    name: "Jayson Gabriel Limosnero",
    role: "BSIT Student",
    location: "Tungkil, Minglanilla. Cebu",
    birthday: "Aug. 11, 2005",
    email: "limosnerogabriel@gmail.com",
    phone: "09510731866",
    bio: "Hi! I'm Jayson Gabriel L. Limosnero, 20 years old. I’m living with my parents while figuring out my own path, but I stay optimistic and keep pushing myself to grow every day. I enjoy connecting with people and learning from those around me, and I like to reflect positivity in my interactions. Lately, I’ve been diving into leveling up my software development skills, and gaming—things that challenge me, inspire me, and keep life interesting.",
  };

  return (
    <View style={styles.masterContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#B20000"
        translucent={false}
      />

      <SafeAreaView style={styles.safeHeader}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>{"<"} BACK</Text>
          </TouchableOpacity>

          <Text style={styles.headerBrand}>
            PINOY<Text style={styles.headerHighlight}>FLIX</Text>
          </Text>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image source={roy} style={styles.mainImage} />
          <View style={styles.hdBadge}>
            <Text style={styles.badgeText}>HD 1080p</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.subTitle}>{profileData.role}</Text>
          <Text style={styles.metaData}>Verified Profile • Minglanilla, Cebu</Text>
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>About Me</Text>
          </View>
          <Text style={styles.bioText}>{profileData.bio}</Text>
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Personal Details</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Birthday</Text>
            <Text style={styles.detailValue}>{profileData.birthday}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>{profileData.email}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phone</Text>
            <Text style={styles.detailValue}>{profileData.phone}</Text>
          </View>

          <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>{profileData.location}</Text>
          </View>
        </View>

        <View style={styles.footerSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  safeHeader: {
    backgroundColor: "#B20000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerBar: {
    backgroundColor: "#B20000",
    paddingVertical: 12,
    borderBottomWidth: 4,
    borderBottomColor: "#FFD700",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 15,
    padding: 5,
    zIndex: 20,
  },
  backButtonText: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 13,
  },
  headerBrand: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -1,
  },
  headerHighlight: {
    color: "#FFD700",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageContainer: {
    backgroundColor: "#000",
    width: width,
    aspectRatio: 16 / 9,
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  hdBadge: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#FFD700",
  },
  badgeText: {
    color: "#FFD700",
    fontSize: 10,
    fontWeight: "bold",
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "900",
    color: "#B20000",
  },
  subTitle: {
    fontSize: 14,
    color: "#333",
    fontWeight: "700",
    marginTop: 2,
  },
  metaData: {
    fontSize: 11,
    color: "#888",
    marginTop: 5,
  },
  detailsBox: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
  },
  sectionHeader: {
    borderLeftWidth: 4,
    borderLeftColor: "#B20000",
    paddingLeft: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#333",
    textTransform: "uppercase",
  },
  bioText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    textAlign: "justify",
  },
  detailRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  detailLabel: {
    fontWeight: "700",
    width: 80,
    color: "#666",
    fontSize: 13,
  },
  detailValue: {
    flex: 1,
    color: "#222",
    fontSize: 13,
    fontWeight: "500",
  },
  footerSpacer: {
    height: 60,
  },
});

export default ProfileScreen;
