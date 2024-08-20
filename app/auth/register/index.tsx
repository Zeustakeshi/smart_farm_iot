import { View, Text } from "react-native";
import React from "react";
import RegisterForm from "@/components/forms/RegisterForm";

type Props = {};

const register = (props: Props) => {
    return (
        <View>
            <Text className="text-3xl font-semibold">Welcome</Text>
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
