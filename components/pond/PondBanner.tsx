import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {};

const PondBanner = (props: Props) => {
    return (
        <View>
            <View className="w-full h-[180] rounded-xl overflow-hidden">
                <Image
                    className="w-full h-full object-cover"
                    src="https://chephamvisinh.vn/wp-content/uploads/2020/08/ao-nuoi-tom-ca-o-nhiem-gay-thiet-hai-lon-cho-nguoi-nuoi.jpg"
                ></Image>
            </View>
            <View className="flex w-full flex-row justify-between items-center p-2">
                <Text className="text-2xl font-semibold my-3">Ao số 1</Text>
                <Pressable className="w-[32] h-[32] justify-center items-center">
                    <Ionicons name="settings-outline" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

export default PondBanner;
