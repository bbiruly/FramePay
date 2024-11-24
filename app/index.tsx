import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Style";
import Colors from "@/constants/Colors";
import { ResizeMode, Video } from "expo-av";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
  return (
    <View style={styles.constainer}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          source={{ uri: assets[0].uri }}
          style={styles.video}
          shouldPlay
          isLooping
          isMuted
        />
        // <VideoView style={styles.video} source={{ uri: assets[0].uri }} allowsFullscreen allowsPictureInPicture />
      )}
      <View style={{ padding: 20, marginTop: 80 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.button}>
        <Link
          href="/login"
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>
              Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <Link
          href="/signup"
          asChild
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: "#fff" },
          ]}
        >
          <TouchableOpacity>
            <Text style={{ color: "#000", fontSize: 22, fontWeight: "500" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    fontSize: 36,
    fontWeight: 900,
    color: "#fff",
    textTransform: "uppercase",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    gap: 10,
    marginBottom: 60,
    paddingHorizontal: 40,
  },
});

export default Page;
