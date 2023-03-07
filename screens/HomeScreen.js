import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "never" }} className="bg-white pt-5">
      <ScrollView>
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri: "https://www.nicepng.com/png/detail/874-8740891_heart-in-hand-png-clipart-clip-art-social.png",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded"
          />

          <View className="flex-1">
            <Text className="font-bold text-lg">Helpful Neighbor</Text>
            <Text className="font-light italic">
              Changing one life at a time.
            </Text>
          </View>

          <UserIcon size={35} color="#8458B3" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="#845883" size={20} />
            <TextInput
              placeholder="What are you looking for?"
              keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon color="#8458B3" />
        </View>
      </Text>

      {/* Title */}
      <View className="items-center pt-10 pb-9">
        <Text className="font-extrabold text-2xl text-purple-pain">
          Welcome to Helpful Neighbor!
        </Text>
      </View>

      {/* Bio */}
      <View className=" space-y-2 items-center border-2 rounded-md py-8 mx-5 px-3 pt-6">
        <Text className="font-bold text-lg underline-offset-1 pb-4">
          A little bit about us...
        </Text>
        <Text>
          The world is made up of amazing people. People who, if given the
          chance, could change lives just by their voices alone. There are
          people who yearn to be heard and to be helped. So many lives we pass
          by everyday that we could change with simple actions. 

          That's why with "Helpful Neighbor" we'll be able to help everyone no matter there situation. With this 
          software, homelessness will be a thing of the past and future's for everyone will shine a whole lot brighter.
        </Text>
      </View>

      {/* Meet the Creators */}
      <View className="items-center py-6 mx-5">
        <Text className=" text-medium-purple font-bold text-4xl underline-offset-2 py-10">Meet the creators!</Text>
      </View>

      <View className=" space-y-2 items-center mx-5">
        <Text className=" font-semibold text-3xl py-4">Autumn</Text>
        <Text className=" font-semibold text-3xl py-4">Payton</Text>
        <Text className=" font-semibold text-3xl py-4">Kaitlyn</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
