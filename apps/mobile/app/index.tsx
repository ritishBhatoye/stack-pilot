import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <StatusBar style="auto" />
      <Text className="text-4xl font-bold text-gray-900 mb-4">
        Stack Pilot
      </Text>
      <Text className="text-lg text-gray-600 text-center mb-8">
        Production-ready Expo + Next.js applications
      </Text>
      <Link href="/auth" asChild>
        <TouchableOpacity className="bg-blue-600 px-8 py-4 rounded-lg">
          <Text className="text-white font-semibold text-lg">Get Started</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
