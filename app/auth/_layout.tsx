import { AntDesign } from "@expo/vector-icons";
import { router, Slot } from "expo-router";
import React from "react";
import {
    Image,
    KeyboardAvoidingView,
    Pressable,
    Text,
    View,
} from "react-native";

type Props = {};

const _layout = (props: Props) => {
    return (
        <View className="flex-1  bg-white px-5 py-4 ">
            <View className="relative min-h-[150]">
                <Pressable
                    onPress={() => {
                        router.back();
                    }}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                {/* <View className="w-[185] h-[100] ml-[0] -rotate-12 my-5 z-10">
                    <Image
                        className="w-full h-full object-cover"
                        source={require("@/assets/images/logo_large.png")}
                    ></Image>
                </View> */}
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
            <View className="py-4">
                <KeyboardAvoidingView>
                    <Slot />
                </KeyboardAvoidingView>
                <View className="flex w-full flex-row-reverse justify-center items-center">
                    <View className="w-[35%] h-[1] bg-slate-300"></View>
                    <Text className="mx-5 text-slate-500 ">Hoặc</Text>
                    <View className="w-[35%] h-[1] bg-slate-300"></View>
                </View>
                <View className="w-full flex-row space-x-5 my-5 justify-center items-center">
                    <Pressable className="p-2 w-[50] h-[50] border border-slate-200 rounded-full">
                        <Image
                            className="w-full h-full object-contain"
                            source={require("@/assets/images/socials/twitter.png")}
                        ></Image>
                    </Pressable>
                    <Pressable className="p-2 w-[50] h-[50] border border-slate-200 rounded-full">
                        <Image
                            className="w-full h-full object-contain"
                            source={require("@/assets/images/socials/facebook.png")}
                        ></Image>
                    </Pressable>
                    <Pressable className="p-2 w-[50] h-[50] border border-slate-200 rounded-full">
                        <Image
                            className="w-full h-full object-contain"
                            source={require("@/assets/images/socials/apple.png")}
                        ></Image>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default _layout;
