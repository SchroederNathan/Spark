import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full items-center px-4">
          <Text className="text-text text-4xl font-pbold mt-3 ">Spark.</Text>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-text text-3xl font-bold text-center">
              Discover Endless Possibilities with
              <Text className="text-secondary"> Spark</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 right-24"
              tintColor="#35825c"
              resizeMode="contain"
            />
          </View>
          <Text className="text-text text-sm font-pregular mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Spark
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
