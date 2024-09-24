import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const revenueDataA = [
    { value: 0, dataPointText: "0" }, // Tháng 1
    { value: 50, dataPointText: "50" }, // Tháng 2
    { value: 75, dataPointText: "75" }, // Tháng 3
    { value: 150, dataPointText: "150" }, // Tháng 4
    { value: 125, dataPointText: "125" }, // Tháng 5
    { value: 200, dataPointText: "200" }, // Tháng 6
    { value: 250, dataPointText: "250" }, // Tháng 7
    { value: 300, dataPointText: "300" }, // Tháng 8
];

const revenueDataB = [
    { value: 0, dataPointText: "0" }, // Tháng 1
    { value: 40, dataPointText: "40" }, // Tháng 2
    { value: 65, dataPointText: "65" }, // Tháng 3
    { value: 130, dataPointText: "130" }, // Tháng 4
    { value: 110, dataPointText: "110" }, // Tháng 5
    { value: 180, dataPointText: "180" }, // Tháng 6
    { value: 220, dataPointText: "220" }, // Tháng 7
    { value: 290, dataPointText: "290" }, // Tháng 8
];

const revenueDataC = [
    { value: 0, dataPointText: "0" }, // Tháng 1
    { value: 143, dataPointText: "40" }, // Tháng 2
    { value: 281, dataPointText: "65" }, // Tháng 3
    { value: 310, dataPointText: "130" }, // Tháng 4
    { value: 330, dataPointText: "110" }, // Tháng 5
    { value: 390, dataPointText: "180" }, // Tháng 6
    { value: 520, dataPointText: "220" }, // Tháng 7
    { value: 500, dataPointText: "290" }, // Tháng 8
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
                <Text className="text-2xl my-1 font-semibold">
                    Quản lý tài chính
                </Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="my-2 "
                >
                    <View className="flex flex-row justify-end items-center my-3 px-2">
                        <Pressable className="px-4 py-3 rounded-md bg-primary">
                            <Text className="text-white">Dự doán chi phí</Text>
                        </Pressable>
                    </View>
                    <View className="border border-slate-200 rounded-xl p-5">
                        <Text className="mb-3 text text-slate-500">
                            Quản lý dòng tiền
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
                    <View className="w-full p-3 border-slate-200 rounded-xl border my-2">
                        <Text className="text-lg font-semibold">
                            Thống kê doanh thu
                        </Text>
                        <View className="mx-auto my-3">
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <LineChart
                                    data={revenueDataA}
                                    data2={revenueDataB}
                                    data3={revenueDataC}
                                    height={250}
                                    showVerticalLines={true}
                                    spacing={44}
                                    initialSpacing={0}
                                    color1="#14b8a6" // Màu của Ao A
                                    color2="#6366f1" // Màu của Ao B
                                    color3="#f59e0b" // Màu của Ao A
                                    textColor1="#2dd4bf" // Màu chữ của Ao A
                                    textColor2="#818cf8" // Màu chữ của Ao B
                                    textColor3="#fbbf24"
                                    dataPointsColor1="#0d9488" // Màu điểm của Ao A
                                    dataPointsColor2="#4f46e5" // Màu điểm của Ao B
                                    dataPointsColor3="#d97706" // Màu điểm của Ao B
                                    dataPointsHeight={6}
                                    dataPointsWidth={6}
                                    textShiftY={-2}
                                    textShiftX={-5}
                                    textFontSize={13}
                                    // Tên tháng
                                    xAxisLabelTexts={[
                                        "T1",
                                        "T2",
                                        "T3",
                                        "T4",
                                        "T5",
                                        "T6",
                                        "T7",
                                        "T8",
                                    ]}
                                />
                            </ScrollView>
                        </View>
                        <View>
                            <View className="flex flex-row justify-start items-center space-x-2">
                                <View className="bg-[#14b8a6] w-[10] h-[10] rounded-full"></View>
                                <Text className="text-sm font-semibold">
                                    Ao số 1
                                </Text>
                            </View>
                            <View className="flex flex-row justify-start items-center space-x-2">
                                <View className="bg-[#6366f1] w-[10] h-[10] rounded-full"></View>
                                <Text className="text-sm font-semibold">
                                    Ao số 2
                                </Text>
                            </View>
                            <View className="flex flex-row justify-start items-center space-x-2">
                                <View className="bg-[#f59e0b] w-[10] h-[10] rounded-full"></View>
                                <Text className="text-sm font-semibold">
                                    Ao số 3
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-row justify-between items-center">
                        <Text className="my-3 text-lg ">Lịch sử giao dịch</Text>
                        <Text className="my-3 text-sm text-primary ">
                            Xem tất cả
                        </Text>
                    </View>
                    <View className="space-y-2">
                        <View className="space-y-2">
                            <View className="border border-slate-200 rounded-xl p-5 flex-row justify-start items-center space-x-2">
                                <View className="flex-row flex-1 justify-start items-center space-x-2">
                                    <Text className="text-2xl font-semibold">
                                        21
                                    </Text>
                                    <View>
                                        <Text>Thứ sáu</Text>
                                        <Text>21/9/2024</Text>
                                    </View>
                                </View>
                                <Text className="font-medium text-rose-600">
                                    -5,000,000₫
                                </Text>
                            </View>
                        </View>
                        <View className="border border-slate-200 rounded-xl p-5 flex-row justify-start items-center space-x-2">
                            <View className="flex-row flex-1 justify-start items-center space-x-2">
                                <Text className="text-2xl font-semibold">
                                    20
                                </Text>
                                <View>
                                    <Text>Thứ sáu</Text>
                                    <Text>20/9/2024</Text>
                                </View>
                            </View>
                            <Text className="font-medium text-rose-600">
                                -5,000,000₫
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </ScreenWrapper>
        </View>
    );
};

export default _layout;
