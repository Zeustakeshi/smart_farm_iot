import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

type Props = {};

const ButtonAddPond = (props: Props) => {
    return (
        <Pressable
            onPress={() => router.push("/support")}
            className="absolute bottom-5 right-5 w-[50] h-[50] flex justify-center items-center bg-primary rounded-full shadow-xl"
        >
            <FontAwesome6 name="plus" size={20} color="white" />
        </Pressable>
    );
};

export default ButtonAddPond;
