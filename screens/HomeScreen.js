import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Helpful Neighbor"
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
      <Text className="text-red-500">

        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: "https://www.nicepng.com/png/detail/874-8740891_heart-in-hand-png-clipart-clip-art-social.png"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-md"
          />
        </View>

        <View>
          <Text className="font-bold ">Helpful Neighbor</Text>
        </View>

      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
