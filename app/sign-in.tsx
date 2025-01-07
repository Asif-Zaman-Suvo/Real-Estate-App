import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="flex-1 justify-center items-center">
          <Image
            source={images.onboarding}
            className="w-full h-4/6"
            resizeMode="contain"
          />
          <View className="px-10 w-full">
            <Text className="text-center text-black-200 uppercase font-rubik text-base">
              Welcome to ReState
            </Text>
            <Text className="text-center text-black-300 mt-2 font-rubik-bold text-2xl">
              Let's Get You Closer to{"\n"}
              <Text className="text-primary-300">Your Ideal Home</Text>
            </Text>
            <Text className="text-center text-black-200 mt-12 font-rubik text-lg">
              Login to ReState with Google
            </Text>
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
            >
              <View className="flex flex-row items-center justify-center">
                <Image
                  resizeMode="contain"
                  source={icons.google}
                  className="w-5 h-5"
                />
                <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
