import SignOutButton from "@/components/SignOutButton";
import { useUserSync } from "@/hooks/useUserSync";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const { user } = useUser();

console.log(user);

  useUserSync(); // just to make sure user is loaded and synced before rendering the screen
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100">
            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
            <Text className="text-xl font-bold text-gray-900">Home</Text>
            <SignOutButton />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 80 }}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={isRefetching}
        //     onRefresh={handlePullToRefresh}
        //     tintColor={"#1DA1F2"}
        //   />
        // }
      >
        {/* <PostComposer />
        <PostsList /> */}
      </ScrollView>
    </SafeAreaView>
  )
}
