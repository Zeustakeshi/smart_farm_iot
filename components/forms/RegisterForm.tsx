import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

type Props = {};

const RegisterForm = (props: Props) => {
    const router = useRouter();

    return (
        <ScrollView keyboardDismissMode="interactive">
            <View className="space-y-5">
                <TextInput
                    className="border-b border-b-slate-200 focus:border-b-primary p-2"
                    placeholder="Email hoặc số điện thoại"
                ></TextInput>
                <TextInput
                    showSoftInputOnFocus
                    className="border-b border-b-slate-200 focus:border-b-primary p-2"
                    placeholder="Mật khẩu"
                    secureTextEntry
                ></TextInput>
                <TextInput
                    showSoftInputOnFocus
                    className="border-b border-b-slate-200 focus:border-b-primary p-2"
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry
                ></TextInput>
            </View>
            <Pressable
                onPress={() =>
                    router.push({
                        pathname: "/farm-detail/step1",
                    })
                }
                className="my-5 bg-primary px-5  py-4 rounded-md"
            >
                <Text className="text-white text-center">Tạo tài khoản</Text>
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
