import MessageList from "@/components/support/MessageList";
import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {};

const _layout = (props: Props) => {
    return (
        <View className="flex-1 bg-white pb-4">
            <ScreenWrapper>
                <View className="flex flex-row justify-between items-center p-2 border-b border-b-slate-100">
                    <View className="flex flex-row space-x-5 items-center justify-start">
                        <Pressable
                            onPress={() => {
                                router.back();
                            }}
                            className="mb-2"
                        >
                            <AntDesign
                                name="arrowleft"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                        <Text className="text-lg font-semibold">
                            Phân tích và hỗ trợ
                        </Text>
                    </View>
                    <View className="flex flex-row juend">
                        <MaterialIcons
                            name="more-vert"
                            size={24}
                            color="black"
                        />
                    </View>
                </View>
                <MessageList></MessageList>
            </ScreenWrapper>
        </View>
    );
};

export default _layout;
