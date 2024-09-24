import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";
import { Text, View } from "react-native";

type Props = {};

const register = (props: Props) => {
    return (
        <View>
            <Text className="text-3xl font-semibold">Xin chào</Text>
            <Text className="text-slate-500" numberOfLines={1}>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
            <View className="my-5">
                <RegisterForm></RegisterForm>
            </View>
        </View>
    );
};

export default register;
