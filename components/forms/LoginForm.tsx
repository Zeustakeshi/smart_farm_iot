import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

type Props = {};

const LoginForm = (props: Props) => {
    return (
        <ScrollView keyboardDismissMode="interactive">
            <View className="space-y-5 ">
                <TextInput
                    showSoftInputOnFocus
                    className="border-b border-b-slate-200 focus:border-b-primary p-2"
                    placeholder="Email hoặc số điện thoại"
                    keyboardType="email-address"
                ></TextInput>
                <TextInput
                    showSoftInputOnFocus
                    className="border-b border-b-slate-200 focus:border-b-primary p-2"
                    placeholder="Mật khẩu"
                    secureTextEntry
                ></TextInput>
            </View>
            <Pressable className="my-5 bg-primary px-5  py-4 rounded-md">
                <Text className="text-white text-center">Đăng nhập</Text>
            </Pressable>
            <View className="my-5 flex flex-row justify-center space-x-2 items-center">
                <Text>Bạn chưa có tài khoản? </Text>
                <Link href="/auth/register">
                    <Text className="font-semibold text-primary">Đăng ký</Text>
                </Link>
            </View>
        </ScrollView>
    );
};

export default LoginForm;
