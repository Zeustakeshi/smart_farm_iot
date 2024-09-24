import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart, PieChart } from "react-native-gifted-charts";

type Props = {};
const pieData = [
    { value: 3, color: "#10b981" },
    { value: 2, color: "#fde047" },
    { value: 1, color: "#f43f5e" },
];

const lineDataA = [
    { value: 0, dataPointText: "0" }, // Tháng 1
    { value: 10, dataPointText: "10" }, // Tháng 2
    { value: 8, dataPointText: "8" }, // Tháng 3
    { value: 58, dataPointText: "58" }, // Tháng 4
    { value: 56, dataPointText: "56" }, // Tháng 5
    { value: 78, dataPointText: "78" }, // Tháng 6
    { value: 74, dataPointText: "74" }, // Tháng 7
    { value: 98, dataPointText: "98" }, // Tháng 8
];

const lineDataB = [
    { value: 0, dataPointText: "0" }, // Tháng 1
    { value: 20, dataPointText: "20" }, // Tháng 2
    { value: 18, dataPointText: "18" }, // Tháng 3
    { value: 40, dataPointText: "40" }, // Tháng 4
    { value: 36, dataPointText: "36" }, // Tháng 5
    { value: 60, dataPointText: "60" }, // Tháng 6
    { value: 54, dataPointText: "54" }, // Tháng 7
    { value: 85, dataPointText: "85" }, // Tháng 8
];

const lineDataC = [
    { value: 3, dataPointText: "3" }, // Tháng 1
    { value: 30, dataPointText: "30" }, // Tháng 2
    { value: 42, dataPointText: "42" }, // Tháng 3
    { value: 80, dataPointText: "80" }, // Tháng 4
    { value: 60, dataPointText: " 60" }, // Tháng 5
    { value: 65, dataPointText: "65" }, // Tháng 6
    { value: 75, dataPointText: "54" }, // Tháng 7
    { value: 85, dataPointText: "85" }, // Tháng 8
];

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

const PondAnalytics = (props: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-2xl my-1 font-semibold">Thống kê trại</Text>
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
                            isAnimated
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
                        <Text className="text-sm font-semibold">Ao số 1</Text>
                    </View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#6366f1] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">Ao số 2</Text>
                    </View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#f59e0b] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">Ao số 3</Text>
                    </View>
                </View>
            </View>

            <View className="w-full p-3 border-slate-200 rounded-xl border my-2">
                <Text className="text-lg font-semibold">
                    Sản Lượng Cá Theo Thời Gian
                </Text>
                <View className="mx-auto my-3">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <LineChart
                            isAnimated
                            data={lineDataA}
                            data2={lineDataB}
                            data3={lineDataC}
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
                        <Text className="text-sm font-semibold">Ao số 1</Text>
                    </View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#6366f1] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">Ao số 2</Text>
                    </View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#f59e0b] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">Ao số 3</Text>
                    </View>
                </View>
            </View>
            <View className="w-full p-3 border-slate-200 rounded-xl border my-2">
                <Text className="text-lg font-semibold">Tỉ lệ sản xuất</Text>
                <View className="mx-auto my-3">
                    <PieChart
                        isAnimated
                        data={pieData}
                        showText
                        textColor="black"
                        radius={100}
                        textSize={10}
                        focusOnPress
                        showValuesAsLabels
                        showTextBackground
                        textBackgroundRadius={10}
                    />
                </View>
                <View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#10b981] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">Ao tốt</Text>
                    </View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#fde047] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">Ao trống</Text>
                    </View>
                    <View className="flex flex-row justify-start items-center space-x-2">
                        <View className="bg-[#f43f5e] w-[10] h-[10] rounded-full"></View>
                        <Text className="text-sm font-semibold">
                            Ao có vấn đề
                        </Text>
                    </View>
                </View>
                <View className="w-full my-4 space-y-2">
                    <View className="flex flex-row justify-between">
                        <Text className="text-slate-500">
                            Tổng số lượng thức ăn:{" "}
                        </Text>
                        <Text className="font-medium">1823 kg</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Text className="text-slate-500">Tổng sản lượng:</Text>
                        <Text className="font-medium">2000 kg</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#cbd5e1",
        shadowOffset: {
            width: 0,
            height: 0.1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.2,
        elevation: 5,
    },
});

export default PondAnalytics;
