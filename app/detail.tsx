import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const RegistrationDetails = () => {
  const router = useRouter();

  const params = useLocalSearchParams();

  const userData = {
    fName: params.fName || "Juan",
    mName: params.mName || "Santos",
    lName: params.lName || "Dela Cruz",
    DOB: params.DOB || "10/02/2005", 
    address: params.address || "Maharuhay, Medellin, Cebu",
    email: params.email || "juan.delacruz@example.com",
    contact: params.contact || "0912 345 6789",
  };

  const getFullName = () => {
    const { fName, mName, lName } = userData;
    const middleInitial = mName ? `${mName.charAt(0)}.` : "";
    return `${fName} ${middleInitial} ${lName}`.trim();
  };

  const calculateAge = (dobString) => {
    if (!dobString) return "N/A";

    const parts = dobString.split("/");
    
    if (parts.length !== 3) return "Invalid Date";

    const dob = new Date(parts[2], parts[0] - 1, parts[1]);
    
    if (isNaN(dob)) return "Invalid Date"; 

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  };

  const calculatedAge = calculateAge(userData.DOB);

  return (
    <View style={styles.masterContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#B20000"
        translucent={false}
      />

      <View style={styles.headerWrapper}>
        <SafeAreaView>
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
      </View>

      <ScrollView
        style={styles.mainScroll}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categoryBar}>
          <Text style={styles.categoryTitle}>REGISTRATION DETAILS</Text>
        </View>

        <View style={styles.detailsBox}>
          

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Full Name</Text>
            <Text style={styles.detailValue}>{getFullName()}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date of Birth</Text>
            <Text style={styles.detailValue}>{userData.DOB}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Age</Text>
            <Text
              style={[
                styles.detailValue,
                { color: "#B20000", fontWeight: "bold" },
              ]}
            >
              {typeof calculatedAge === "number" 
                ? `${calculatedAge} years old` 
                : calculatedAge}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>{userData.email}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Contact No.</Text>
            <Text style={styles.detailValue}>{userData.contact}</Text>
          </View>

          <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>{userData.address}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.primaryButtonText}>PROCEED TO HOME</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  masterContainer: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  headerWrapper: {
    backgroundColor: "#B20000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderBottomWidth: 4,
    borderBottomColor: "#FFD700",
  },
  headerBar: {
    alignItems: "center",
    paddingVertical: 12,
    flexDirection: "row",
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
  mainScroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    flexGrow: 1,
  },
  categoryBar: {
    backgroundColor: "#FFF",
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#B20000",
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#333",
  },
  detailsBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 15,
    elevation: 1,
  },
  statusHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#B20000",
    paddingBottom: 10,
    marginBottom: 10,
  },
  statusText: {
    color: "#B20000",
    fontWeight: "900",
    fontSize: 12,
    letterSpacing: 1,
  },
  dateText: {
    color: "#888",
    fontSize: 10,
    fontWeight: "bold",
  },
  detailRow: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  detailLabel: {
    fontWeight: "700",
    width: 100,
    color: "#666",
    fontSize: 13,
  },
  detailValue: {
    flex: 1,
    color: "#222",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: "#B20000",
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#8B0000",
    elevation: 2,
  },
  primaryButtonText: {
    color: "#FFD700",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  secondaryButton: {
    backgroundColor: "#EEEEEE",
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  secondaryButtonText: {
    color: "#555",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  bottomSpace: {
    height: 80,
  },
});

export default RegistrationDetails;