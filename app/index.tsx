import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";

const roy = require("./assets/index/roy1.jpg");
const ed = require("./assets/index/ed.jpg");
const jp = require("./assets/index/jp.png");
const jpnoq = require("./assets/index/jpnoq1.jpg");
const jayson = require("./assets/index/jayson.jpg");

const PinoyFlixFixed = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#B20000" />

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
      >
        <View style={styles.categoryBar}>
          <Text style={styles.categoryTitle}>POPULAR TROPA</Text>
        </View>

        <View style={styles.contentBox}>
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

          <Link href={{ pathname: "/profile5" }} asChild>
            <TouchableOpacity style={styles.row}>
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

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#B20000",
    paddingTop: 25 
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
  bottomSpace: {
    height: 100,
  },
});

export default PinoyFlixFixed;
