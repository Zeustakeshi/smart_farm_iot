import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const lineDataA = [
    { value: 6.2, dataPointText: "6.2" }, // Tháng 1
    { value: 6.8, dataPointText: "6.8" }, // Tháng 2
    { value: 7.5, dataPointText: "7.5" }, // Tháng 3
    { value: 7.0, dataPointText: "7.0" }, // Tháng 4
    { value: 7.8, dataPointText: "7.8" }, // Tháng 5
    { value: 8.1, dataPointText: "8.1" }, // Tháng 6
    { value: 8.6, dataPointText: "8.6" }, // Tháng 7
    { value: 7.9, dataPointText: "7.9" }, // Tháng 8
];

// Dữ liệu độ pH - Mức dao động từ 6.5 đến 8.0
const lineDataB = [
    { value: 6.7, dataPointText: "6.7" }, // Tháng 1
    { value: 6.9, dataPointText: "6.9" }, // Tháng 2
    { value: 7.3, dataPointText: "7.3" }, // Tháng 3
    { value: 7.1, dataPointText: "7.1" }, // Tháng 4
    { value: 7.4, dataPointText: "7.4" }, // Tháng 5
    { value: 7.5, dataPointText: "7.5" }, // Tháng 6
    { value: 7.8, dataPointText: "7.8" }, // Tháng 7
    { value: 7.6, dataPointText: "7.6" }, // Tháng 8
];

// Dữ liệu nhiệt độ (°C) - Mức dao động từ 22°C đến 32°C
const lineDataC = [
    { value: 22.5, dataPointText: "22.5" }, // Tháng 1
    { value: 24.0, dataPointText: "24.0" }, // Tháng 2
    { value: 26.5, dataPointText: "26.5" }, // Tháng 3
    { value: 28.7, dataPointText: "28.7" }, // Tháng 4
    { value: 30.1, dataPointText: "30.1" }, // Tháng 5
    { value: 31.5, dataPointText: "31.5" }, // Tháng 6
    { value: 30.8, dataPointText: "30.8" }, // Tháng 7
    { value: 29.3, dataPointText: "29.3" }, // Tháng 8
];

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
                <Text className="text-2xl my-1 font-semibold">Dự doán</Text>
                <View className="border border-slate-200 rounded-xl p-5">
                    <Text className="mb-3 text text-slate-500">
                        Dự doán kinh tế ao
                    </Text>
                    <View className="flex flex-row justify-between items-center ">
                        <Text className="text-lg font-semibold text-primary">
                            Tiền hiện có
                        </Text>
                        <Text className="text-lg text-primary font-medium">
                            25,000,000₫
                        </Text>
                    </View>

                    <View className="flex flex-row justify-between items-center gap-2">
                        <Text className="text-lg font-semibold text-yellow-600">
                            Số dư đầu kì:
                        </Text>
                        <Text className="text-lg font-medium text-yellow-600">
                            0₫
                        </Text>
                    </View>

                    <View className="flex flex-row justify-between items-center gap-2">
                        <Text className="text-lg font-semibold text-green-600">
                            Thu nhập tháng này:
                        </Text>
                        <Text className="text-lg  text-green-600 font-medium">
                            0₫
                        </Text>
                    </View>

                    <View className="flex flex-row justify-between items-center gap-2">
                        <Text className="text-lg font-semibold text-rose-600">
                            Chi phí tháng này:
                        </Text>
                        <Text className="text-lg text-rose-600 font-medium">
                            {" "}
                            10,000,000₫
                        </Text>
                    </View>
                </View>
            </ScreenWrapper>
        </View>
    );
};

export default _layout;
