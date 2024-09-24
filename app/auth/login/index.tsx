import LoginForm from "@/components/forms/LoginForm";
import React from "react";
import { Text, View } from "react-native";

type Props = {};

const login = (props: Props) => {
    return (
        <View>
            <Text className="text-3xl font-semibold">Chào mừng quay lại</Text>
            <Text className="text-slate-500 my-1" numberOfLines={1}>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
            <View className="my-5">
                <LoginForm></LoginForm>
            </View>
        </View>
    );
};

export default login;
