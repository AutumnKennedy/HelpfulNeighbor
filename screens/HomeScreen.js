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

        <View>
          <Image 
            source={{
              uri: "https://www.nicepng.com/png/detail/874-8740891_heart-in-hand-png-clipart-clip-art-social.png"
            }}
            className="h-9 w-9 bg-gray-300 p-4"
          />
        </View>

      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
