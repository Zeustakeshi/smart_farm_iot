import FarmInfoForm from "@/components/forms/FarmInfoForm";
import React from "react";
import { Text, View } from "react-native";

const step2 = () => {
    return (
        <View>
            <Text className="text-2xl font-semibold">Thông tin trại</Text>
            <FarmInfoForm></FarmInfoForm>
        </View>
    );
};

export default step2;
