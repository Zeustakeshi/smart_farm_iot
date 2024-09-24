import PondBanner from "@/components/pond/PondBanner";
import PondMonitor from "@/components/pond/PondMonitor";
import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

type Props = {};

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

const PondDetail = (props: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <PondBanner></PondBanner>
            <PondMonitor></PondMonitor>
            <ScreenWrapper>
                <Text className="my-3 text-lg font-semibold">Lịch sử đo</Text>
                <View>
                    <LineChart
                        isAnimated
                        data={lineDataA}
                        data2={lineDataB}
                        data3={lineDataC}
                        height={250}
                        showVerticalLines={true}
                        spacing={38}
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
                        noOfSections={5}
                        maxValue={35}
                        // yAxisLabelTexts={["10", "20", " 30", "40", "50"]}
                    />
                    <View className="flex flex-row justify-center space-x-4 my-4">
                        <View className="flex flex-row justify-start items-center space-x-2">
                            <View className="bg-[#14b8a6] w-[10] h-[10] rounded-full"></View>
                            <Text className="text-sm font-semibold">
                                DO (mg/L)
                            </Text>
                        </View>
                        <View className="flex flex-row justify-start items-center space-x-2">
                            <View className="bg-[#6366f1] w-[10] h-[10] rounded-full"></View>
                            <Text className="text-sm font-semibold">PH</Text>
                        </View>
                        <View className="flex flex-row justify-start items-center space-x-2">
                            <View className="bg-[#f59e0b] w-[10] h-[10] rounded-full"></View>
                            <Text className="text-sm font-semibold">
                                Nhiệt độ °C
                            </Text>
                        </View>
                    </View>
                </View>
            </ScreenWrapper>
        </ScrollView>
    );
};

export default PondDetail;
