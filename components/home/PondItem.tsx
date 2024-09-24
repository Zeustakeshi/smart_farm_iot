import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
    name: string;
    image: string;
};

const PondItem = ({ name, image }: Props) => {
    return (
        <Pressable
            onPress={() => router.push("/pond/1")}
            className="relative mb-2 w-full  bg-white shadow-2xl p-3 border border-slate-200 rounded-xl overflow-hidden"
        >
            <View className="relative w-full h-[190] p-2">
                <Image
                    className="w-full h-full  rounded-xl"
                    src={image}
                ></Image>
            </View>
            <Text className=" mx-2  font-semibold text-lg">{name}</Text>
            <View className="flex flex-row justify-between items-center mx-2 my-2 ">
                <View>
                    <Text>
                        Trạng thái:{" "}
                        <Text className="text-green-500 font-semibold">
                            Ổn định
                        </Text>
                    </Text>
                </View>
            </View>
            <View className="flex flex-row items-center space-x-3">
                <View className="flex flex-row items-center space-x-1">
                    <View className="w-[30] h-[30]">
                        <Image
                            className="w-full h-full object-cover"
                            source={require("@/assets/images/monitor/photography.png")}
                        ></Image>
                    </View>
                    <Text>20°C</Text>
                </View>
                <View className="flex flex-row items-center space-x-1">
                    <View className="w-[25] h-[25]">
                        <Image
                            className="w-full h-full object-cover"
                            source={require("@/assets/images/monitor/phTube.png")}
                        ></Image>
                    </View>
                    <Text>7 PH</Text>
                </View>
                <View className="flex flex-row items-center space-x-1">
                    <View className="w-[25] h-[25]">
                        <Image
                            className="w-full h-full object-cover"
                            source={require("@/assets/images/monitor/o2.png")}
                        ></Image>
                    </View>
                    <Text>5.5 mg/L</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default PondItem;
