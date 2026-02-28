import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform, // Used to conditionally render UI layouts
} from "react-native";
import { Link, useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

const roy = require("./assets/index/roy1.jpg");
const ed = require("./assets/index/ed.jpg");
const jp = require("./assets/index/jp.png");
const jpnoq = require("./assets/index/jpnoq1.jpg");
const jayson = require("./assets/index/jayson.jpg");

const PinoyFlixFixed = () => {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    mName: "",
    DOB: "",
    address: "",
    email: "",
    contact: "",
  });

  const [showPicker, setShowPicker] = useState(false);
  const [dateObj, setDateObj] = useState(new Date());

  const router = useRouter();

  const register = () => {
    router.push({
      pathname: "/detail",
      params: {
        fName: form.fName,
        lName: form.lName,
        mName: form.mName,
        DOB: form.DOB,
        address: form.address,
        email: form.email,
        contact: form.contact,
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#B20000" />

      {/* Header */}
      <View style={styles.headerBar}>
        <Text style={styles.headerBrand}>
          PINOY<Text style={styles.headerHighlight}>FLIX</Text>
        </Text>
        <Text style={styles.subHeaderText}>PINOY PRIDE • LATEST UPLOADS</Text>
      </View>

      <ScrollView
        style={styles.mainScroll}
        contentContainerStyle={styles.scrollContent}
        bounces={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Category: Friends List */}
        <View style={styles.categoryBar}>
          <Text style={styles.categoryTitle}>POPULAR TROPA</Text>
        </View>

        <View style={styles.contentBox}>
          {/* ROY */}
          <Link href={{ pathname: "/profile1" }} asChild>
            <TouchableOpacity style={styles.row}>
              <View style={styles.thumbContainer}>
                <Image source={roy} style={styles.thumbnail} />
                <View style={styles.hdBadge}>
                  <Text style={styles.badgeText}>HD</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.linkName} numberOfLines={1}>
                  Roy Adrian Rondina
                </Text>
                <Text style={styles.mottoText} numberOfLines={2}>
                  "Former Bold medalist Nalungkot"
                </Text>
                <Text style={styles.metaData}>98% Rating • Viral</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* EDMARK */}
          <Link href={{ pathname: "/profile2" }} asChild>
            <TouchableOpacity style={styles.row}>
              <View style={styles.thumbContainer}>
                <Image source={ed} style={styles.thumbnail} />
                <View style={styles.hdBadge}>
                  <Text style={styles.badgeText}>4K</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.linkName} numberOfLines={1}>
                  Edmark Cujardo Talingting
                </Text>
                <Text style={styles.mottoText} numberOfLines={2}>
                  "Dila Pa Lang… May Plot Twist Na"
                </Text>
                <Text style={styles.metaData}>100% Legit • 5h ago</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* JOHN PAUL M */}
          <Link href={{ pathname: "/profile3" }} asChild>
            <TouchableOpacity style={styles.row}>
              <View style={styles.thumbContainer}>
                <Image source={jp} style={styles.thumbnail} />
                <View style={[styles.hdBadge, { backgroundColor: "red" }]}>
                  <Text style={styles.badgeText}>NEW</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.linkName} numberOfLines={1}>
                  John Paul Mahilom
                </Text>
                <Text style={styles.mottoText} numberOfLines={2}>
                  "Green Flag Sa Harap… Red Flag Sa Dilim"
                </Text>
                <Text style={styles.metaData}>1.2M Views • Trending</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* JHON PAUL N */}
          <Link href={{ pathname: "/profile4" }} asChild>
            <TouchableOpacity style={styles.row}>
              <View style={styles.thumbContainer}>
                <Image source={jpnoq} style={styles.thumbnail} />
                <View style={styles.hdBadge}>
                  <Text style={styles.badgeText}>HD</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.linkName} numberOfLines={1}>
                  Jhon Paul Noquiana
                </Text>
                <Text style={styles.mottoText} numberOfLines={2}>
                  "Tikim Lang Daw… Hanggang Sa Lumalim"
                </Text>
                <Text style={styles.metaData}>Medellin Pride • Viral</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* JAYSON */}
          <Link href={{ pathname: "/profile5" }} asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([styles.row, { borderBottomWidth: 0 }])}
            >
              <View style={styles.thumbContainer}>
                <Image source={jayson} style={styles.thumbnail} />
                <View style={styles.hdBadge}>
                  <Text style={styles.badgeText}>HD</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.linkName} numberOfLines={1}>
                  Jayson Gabriel Limosnero
                </Text>
                <Text style={styles.mottoText} numberOfLines={2}>
                  "Main Character Energy, Extra Sa Scandal"
                </Text>
                <Text style={styles.metaData}>Recommended</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* --- NEW REGISTRATION FORM SECTION --- */}
        <View style={[styles.categoryBar, { marginTop: 20 }]}>
          <Text style={styles.categoryTitle}>REGISTRATION FORM</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formSectionHeader}>Full Name</Text>

          <View style={styles.inputRow}>
            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. Juan"
                placeholderTextColor="#999"
                value={form.fName}
                onChangeText={(text) => setForm({ ...form, fName: text })}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. Dela Cruz"
                placeholderTextColor="#999"
                value={form.lName}
                onChangeText={(text) => setForm({ ...form, lName: text })}
              />
            </View>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.halfInput}>
              <Text style={styles.inputLabel}>Middle Name</Text>
              <TextInput
                style={styles.inputField}
                placeholder="e.g. Santos"
                placeholderTextColor="#999"
                value={form.mName}
                onChangeText={(text) => setForm({ ...form, mName: text })}
              />
            </View>
          </View>

          {/* --- UPDATED DATE OF BIRTH LAYOUT --- */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Date of Birth</Text>

            {Platform.OS === "web" ? (
              /* Fallback Layout for Web */
              <TextInput
                style={styles.inputField}
                placeholder="MM/DD/YYYY"
                placeholderTextColor="#999"
                value={form.DOB}
                onChangeText={(text) => setForm({ ...form, DOB: text })}
              />
            ) : (
              /* Touch Layout for Mobile */
              <TouchableOpacity
                style={[styles.inputField, { justifyContent: "center" }]}
                onPress={() => setShowPicker(true)}
              >
                <Text
                  style={{ color: form.DOB ? "#333" : "#999", fontSize: 14 }}
                >
                  {form.DOB || "MM/DD/YYYY"}
                </Text>
              </TouchableOpacity>
            )}

            {/* Mobile Native Picker Overlay */}
            {showPicker && Platform.OS !== "web" && (
              <View
                style={Platform.OS === "ios" ? styles.iosPickerOverlay : null}
              >
                <DateTimePicker
                  value={dateObj}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  maximumDate={new Date()}
                  onChange={(event, selectedDate) => {
                    if (Platform.OS === "android") {
                      setShowPicker(false);
                    }
                    if (selectedDate) {
                      setDateObj(selectedDate);
                      const formatted = `${
                        selectedDate.getMonth() + 1
                      }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
                      setForm({ ...form, DOB: formatted });
                    }
                  }}
                />
                
                {Platform.OS === "ios" && (
                  <TouchableOpacity
                    style={styles.iosDoneButton}
                    onPress={() => setShowPicker(false)}
                  >
                    <Text style={styles.iosDoneButtonText}>DONE</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Home Address</Text>
            <TextInput
              style={[
                styles.inputField,
                { height: 60, textAlignVertical: "top" },
              ]}
              placeholder="Full Address"
              placeholderTextColor="#999"
              multiline={true}
              value={form.address}
              onChangeText={(text) => setForm({ ...form, address: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.inputField}
              placeholder="juan@example.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Contact Number</Text>
            <TextInput
              style={styles.inputField}
              placeholder="09XX XXX XXXX"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={form.contact}
              onChangeText={(text) => setForm({ ...form, contact: text })}
            />
          </View>

          <TouchableOpacity onPress={register} style={styles.submitButton}>
            <Text style={styles.submitButtonText}> SUBMIT REGISTRATION</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#B20000",
    paddingTop: 25,
  },
  headerBar: {
    backgroundColor: "#B20000",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: "#FFD700",
  },
  headerBrand: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "900",
    fontStyle: "italic",
  },
  headerHighlight: {
    color: "#FFD700",
  },
  subHeaderText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  mainScroll: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  scrollContent: {
    padding: 10,
  },
  categoryBar: {
    backgroundColor: "#FFF",
    padding: 12,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#B20000",
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#333",
  },
  contentBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    alignItems: "center",
  },
  thumbContainer: {
    position: "relative",
    width: 120,
    height: 80,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    resizeMode: "cover",
  },
  hdBadge: {
    position: "absolute",
    bottom: 4,
    right: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingHorizontal: 3,
  },
  badgeText: {
    color: "#FFD700",
    fontSize: 9,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  linkName: {
    color: "#B20000",
    fontSize: 11,
    fontWeight: "bold",
  },
  mottoText: {
    color: "#444",
    fontSize: 12,
    marginTop: 2,
  },
  metaData: {
    color: "#888",
    fontSize: 10,
    marginTop: 4,
  },

  /* --- FORM STYLES --- */
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 15,
  },
  formSectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B20000",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingBottom: 5,
  },
  inputGroup: {
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  halfInput: {
    width: "48%",
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#444",
    marginBottom: 5,
  },
  inputField: {
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: "#333",
  },
  
  /* --- IOS PICKER STYLES --- */
  iosPickerOverlay: {
    backgroundColor: "#FAFAFA",
    marginTop: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CCC",
    paddingBottom: 10,
  },
  iosDoneButton: {
    backgroundColor: "#B20000",
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: "center",
  },
  iosDoneButtonText: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 1,
  },
  
  submitButton: {
    backgroundColor: "#B20000",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#8B0000",
  },
  submitButtonText: {
    color: "#FFD700",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  bottomSpace: {
    height: 100,
  },
});

export default PinoyFlixFixed;