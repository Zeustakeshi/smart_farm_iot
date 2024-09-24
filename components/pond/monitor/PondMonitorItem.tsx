import { WaterQualityStatus } from "@/common/type/monitor.type";
import { waterQualityStatusColors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

type Props = {
    value: number;
    unit: string;
    label: string;
    status?: WaterQualityStatus;
};

const PondMonitorItem = ({
    value,
    label,
    unit,
    status = WaterQualityStatus.GOOD,
}: Props) => {
    return (
        <View
            // style={{ backgroundColor: color }}
            className="relative h-[80] w-[135] bg-slate-100 p-2 rounded-xl m-2 bg-opacity-5"
        >
            {/* <View className="absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-white/95"></View> */}
            <Text className="font-semibold">{label}</Text>
            <View className="flex-row items-end justify-between">
                <Text
                    style={{ color: waterQualityStatusColors[status] }}
                    className="text-3xl font-semibold my-1 flex-1 text-center"
                >
                    {value}
                </Text>
                <Text className="text-center text-sm">{unit}</Text>
            </View>
        </View>
    );
};

export default PondMonitorItem;
