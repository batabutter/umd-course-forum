import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import ".././global.css";

export default function App() {
  return (
    <SafeAreaView className="bg-primary">
      <View className="w-full h-full items-center justify-center">
        <Text className="text-center font-psemibold text-lg">
          Welcome to the UMD Course Forum
        </Text>
      </View>
    </SafeAreaView>
  );
}
