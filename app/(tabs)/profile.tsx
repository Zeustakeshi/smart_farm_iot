import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import { AntDesign, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

const profile = () => {
    return (
        <View className="flex-1 bg-white">
            <ScrollView>
                <ScreenWrapper>
                    <Pressable
                        onPress={() => {
                            router.back();
                        }}
                    >
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>

                    <View className="my-4 w-full justify-center items-center">
                        <View className="w-[120] h-[120] rounded-full overflow-hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src="https://plus.unsplash.com/premium_photo-1686269460470-a44c06f16e0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            ></Image>
                        </View>
                        <Text className="font-semibold text-2xl my-4">
                            Chú Tư
                        </Text>
                        <View className="justify-center items-center">
                            <Text className="">
                                Tổng hồ:{" "}
                                <Text className="font-semibold">4</Text>
                            </Text>
                            <Text>
                                Mức đầu tư:
                                <Text className="font-semibold">1 tỷ</Text>
                            </Text>
                        </View>
                    </View>
                    <View className="mx-2">
                        <Text className="text-sm text-slate-500">Cài đặt</Text>
                        <View className="my-3">
                            <View className="flex justify-start items-center flex-row space-x-3 my-2">
                                <Ionicons
                                    name="settings-outline"
                                    size={24}
                                    color="black"
                                />
                                <Text className="text-lg">Cài đặt chung</Text>
                            </View>
                        </View>
                    </View>
                    <View className="mx-2">
                        <Text className="text-sm text-slate-500">
                            Tài khoản
                        </Text>
                        <View className="my-3">
                            <View className="flex justify-start items-center flex-row space-x-3 my-2">
                                <AntDesign
                                    name="user"
                                    size={24}
                                    color="black"
                                />
                                <Text className="text-lg">
                                    Thông tin tài khoản
                                </Text>
                            </View>
                            <View className="flex justify-start items-center flex-row space-x-3 my-2">
                                <Feather name="lock" size={24} color="black" />
                                <Text className="text-lg">
                                    Quyền riêng tư và bảo mật
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="mx-2">
                        <Text className="text-sm text-slate-500">
                            Về chúng tôi
                        </Text>
                        <View className="my-3">
                            <View className="flex justify-start items-center flex-row space-x-3 my-2">
                                <Octicons name="info" size={24} color="black" />
                                <Text className="text-lg">Thông tin</Text>
                            </View>
                            <View className="flex justify-start items-center flex-row space-x-3 my-2">
                                <Feather
                                    name="help-circle"
                                    size={24}
                                    color="black"
                                />
                                <Text className="text-lg">
                                    Trợ giúp và phản hồi
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Pressable className="my-2 w-full bg-rose-500/5 px-4 py-3 rounded-xl">
                        <Text className="text-center text-rose-500 font-semibold">
                            Đăng xuất
                        </Text>
                    </Pressable>
                </ScreenWrapper>
            </ScrollView>
        </View>
    );
};

export default profile;
