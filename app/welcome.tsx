import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {};

const welcome = (props: Props) => {
    return (
        <View className="flex-1  bg-white px-5 py-4 ">
            <View className="relative min-h-[200]">
                <Pressable
                    onPress={() => {
                        router.back();
                    }}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
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
            <View className="flex flex-1">
                <Text className="text-lg font-medium">Chào mừng đến với</Text>
                <View>
                    <View className="w-[185] h-[100] my-5">
                        <Image
                            source={require("@/assets/images/logo_large.png")}
                            className="w-full h-full object-contain"
                        ></Image>
                    </View>
                    <Text className="text-2xl font-semibold">Smart Farm</Text>
                </View>
                <View className="flex-1">
                    <Text className="text-left my-2 text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus quo nostrum, deserunt animi tempore odit! Et
                        reiciendis quo temporibus, aperiam saepe adipisci ipsa
                    </Text>
                </View>
                <View className=" flex flex-row w-full justify-center space-x-5 mb-5">
                    <Pressable
                        onPress={() => router.push("/auth/register")}
                        className="flex-1 px-5 py-4 rounded-md bg-primary/20"
                    >
                        <Text className="text-primary text-center">
                            Đăng ký
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => router.push("/auth/login")}
                        className="flex-1 px-5 py-4 rounded-md bg-primary "
                    >
                        <Text className=" text-white text-center">
                            Đăng nhập
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default welcome;
