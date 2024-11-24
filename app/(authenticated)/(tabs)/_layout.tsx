import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.dark || "blue", // Fallback for debugging
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Visible background
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 2,
          borderTopWidth: 1,
          borderTopColor: "gray",
          
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: "Invest",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="trending-up" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="logo-designernews" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          title: "Crypto",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="logo-bitcoin" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lifestyle"
        options={{
          title: "Lifestyle",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="shirt" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
