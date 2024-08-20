import { View, Text, Image } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

const Logo = ({ className }: Props) => {
    return (
        <View className={cn("flex-row items-center gap-x-2", className)}>
            <View className="w-[61] h-[33] ">
                <Image
                    source={require("@/assets/images/logo.png")}
                    className="w-full h-full object-contain"
                ></Image>
            </View>
            <Text className="text-2xl font-semibold">Smart farm</Text>
        </View>
    );
};

export default Logo;
