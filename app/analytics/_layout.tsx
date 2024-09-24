import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import { AntDesign } from "@expo/vector-icons";
import { router, Slot } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";

type Props = {};

const _layout = (props: Props) => {
    return (
        <View className="flex-1 bg-white">
            <ScreenWrapper>
                <Pressable
                    onPress={() => {
                        router.back();
                    }}
                    className="mb-2"
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <Slot></Slot>
            </ScreenWrapper>
        </View>
    );
};

export default _layout;
