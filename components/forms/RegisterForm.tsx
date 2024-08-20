import { View, TextInput, Pressable, Text, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const RegisterForm = (props: Props) => {
    return (
        <ScrollView keyboardDismissMode="interactive">
            <View className="space-y-5">
                <TextInput
                    className="border-b p-2"
                    placeholder="Tên tài khoản"
                ></TextInput>
                <TextInput
                    showSoftInputOnFocus
                    className="border-b p-2"
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                ></TextInput>
            </View>
            <Pressable className="my-5 bg-primary px-5  py-4 rounded-md">
                <Text className="text-white text-center">Gửi OTP</Text>
            </Pressable>
            <View className="flex flex-row justify-center space-x-2 items-center">
                <Text>Bạn đã có tài khoản? </Text>
                <Link href="/auth/login">
                    <Text className="font-semibold text-primary">
                        Đăng nhập
                    </Text>
                </Link>
            </View>
        </ScrollView>
    );
};

export default RegisterForm;
