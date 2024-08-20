import { View, Text } from "react-native";
import React from "react";
import LoginForm from "@/components/forms/LoginForm";

type Props = {};

const login = (props: Props) => {
    return (
        <View>
            <Text className="text-3xl font-semibold">Welcome back</Text>
            <Text className="text-slate-500" numberOfLines={1}>
                Lorem ipsum dolor sit amet consectetur.
            </Text>
            <View className="my-5">
                <LoginForm></LoginForm>
            </View>
        </View>
    );
};

export default login;
