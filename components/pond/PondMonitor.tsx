import React from "react";
import { Image, Text, View } from "react-native";
import DissolvedOxygenMonitor from "./monitor/DissolvedOxygenMonitor";
import NH3Monitor from "./monitor/NH3Monitor";
import PHLevelMonitor from "./monitor/PHLevelMonitor";
import WaterTemperatureMonitor from "./monitor/WaterTemperatureMonitor";

type Props = {};

const PondMonitor = (props: Props) => {
    return (
        <View className="relative border border-slate-100 rounded-xl p-5">
            <View className="flex-row justify-between items-center px-4">
                <View className="w-[80] h-[60]">
                    <Image
                        className="w-full h-full object-contain "
                        source={require("@/assets/images/weather.png")}
                    ></Image>
                </View>
                <Text className="text-4xl font-semibold">32 °C</Text>
            </View>
            <View className="bg-slate-200 w-full h-[1] my-3"></View>

            <View className="flex-row justify-center flex-wrap">
                <WaterTemperatureMonitor></WaterTemperatureMonitor>
                <PHLevelMonitor></PHLevelMonitor>
                <DissolvedOxygenMonitor></DissolvedOxygenMonitor>
                <NH3Monitor></NH3Monitor>
            </View>
        </View>
    );
};

export default PondMonitor;
