import Logo from "@/components/Logo";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {};

const index = (props: Props) => {
    return (
        <View className="flex-1  bg-white px-5 py-4 ">
            <View className="relative min-h-[200] flex justify-center items-center">
                <Logo className="my-10" />
                <View className="absolute top-2 left-20 w-[38] h-[21]">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/cloud.png")}
                    ></Image>
                </View>
                <View className="absolute top-36 right-10    w-[38] h-[21]">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/cloud.png")}
                    ></Image>
                </View>
                <View className="absolute top-[20] right-0 w-[115] h-[65]">
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
            <View className="w-[330] h-[252] mt-5 ">
                <Image
                    className="w-full h-full object-cover"
                    source={require("@/assets/images/farm.png")}
                ></Image>
            </View>
            <View className="my-5">
                <Text className="text-center text-slate-400" numberOfLines={4}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus rerum quis quas fuga soluta. Aperiam fugiat
                    repudiandae minima consectetur incidunt!
                </Text>
            </View>
            <View className="flex-row justify-center items-center mt-7">
                <Pressable
                    onPress={() => router.push("/welcome")}
                    className="px-5 py-4 rounded-md bg-primary min-w-[200]"
                >
                    <Text className="w-full text-center text-white  font-semibold">
                        Bắt đầu
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default index;
