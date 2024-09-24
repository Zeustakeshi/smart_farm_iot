import { AntDesign } from "@expo/vector-icons";
import { router, Slot } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";

const _layout = () => {
    return (
        <View className=" flex-1  bg-white px-5 py-4 ">
            <View className="relative min-h-[150] w-full">
                <Pressable
                    onPress={() => {
                        router.back();
                    }}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <View className="absolute w-fu top-2 left-20 w-[38] h-[21]">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/cloud.png")}
                    ></Image>
                </View>
                <View className="absolute top-36 right-10 w-[38] h-[21]">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/cloud.png")}
                    ></Image>
                </View>
                <View className="absolute top-[20] right-0 w-[65] h-[35]">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/cloud.png")}
                    ></Image>
                </View>
                <View className="absolute bottom-4 left-0 w-[100] h-[50]">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/cloud.png")}
                    ></Image>
                </View>
            </View>
            <View className="my-4">
                <Slot></Slot>
            </View>
        </View>
    );
};

export default _layout;
