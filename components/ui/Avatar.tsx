import React from "react";
import { Image, View } from "react-native";

type Props = {};

const Avatar = (props: Props) => {
    return (
        <View className="w-[43] h-[43] p-[0.5] bg-white rounded-full justify-center items-center">
            <Image
                className="w-full h-full rounded-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1686269460470-a44c06f16e0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Image>
        </View>
    );
};

export default Avatar;
