import { router } from "expo-router";
import React from "react";
import { Text, TextInput, View } from "react-native";
import Button from "../ui/Button";

const FarmerInfoForm = () => {
    return (
        <View className="space-y-5 w-full">
            <TextInput
                className="border-b border-b-slate-200 focus:border-b-primary p-2"
                placeholder="Tên chủ trại"
            ></TextInput>
            <TextInput
                className="border-b border-b-slate-200 focus:border-b-primary p-2"
                placeholder="Địa chỉ chủ trại"
            ></TextInput>
            <TextInput
                className="border-b border-b-slate-200 focus:border-b-primary p-2"
                placeholder="Số năm kinh nghiệm"
                inputMode="numeric"
            ></TextInput>
            <Button onPress={() => router.push("/farm-detail/step2")}>
                <Text className="text-white text-center">Tiếp tục</Text>
            </Button>
        </View>
    );
};

export default FarmerInfoForm;
