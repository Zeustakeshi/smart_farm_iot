import FarmerInfoForm from "@/components/forms/FarmerInfoForm";
import React from "react";
import { Text, View } from "react-native";

const step1 = () => {
    return (
        <View>
            <Text className="text-2xl font-semibold">Thông tin chủ trại</Text>
            <View className="my-4">
                <FarmerInfoForm></FarmerInfoForm>
            </View>
        </View>
    );
};

export default step1;
