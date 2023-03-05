import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserIcon, Bars4Icon, AdjustmentsHorizontalIcon, MagnifyingGlass, MagnifyingGlassIcon} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        {/*Header*/}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: "https://www.nicepng.com/png/detail/874-8740891_heart-in-hand-png-clipart-clip-art-social.png"
            }}
            className="h-7 w-7 bg-gray-300 p-5 rounded-md"
          /> 

          <View className="flex-1">
            <Text className="font-bold text-lg">
              Helpful Neighbor
            </Text>
            <Text className="font-light text-gray-600 text-xs">
              Changing one life at a time.
              </Text>
          </View>
            <UserIcon size={35} color="red" />
            <Bars4Icon size={35} color="black" />
        </View>

        {/*SearchBox*/}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput placeholder="What are you looking for?" />
          </View>

          <AdjustmentsHorizontalIcon color="red"/>
        </View>

      </Text>
    </SafeAreaView> 
  );
};

export default HomeScreen;
