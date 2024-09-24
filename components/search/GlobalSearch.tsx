import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

type Props = {};

const GlobalSearch = (props: Props) => {
    return (
        <View className="flex flex-row items-center space-x-2 w-full px-5 py-2 bg-white rounded-full">
            <Ionicons name="search" size={20} color="#334155" />
            <TextInput placeholder="Tìm kiếm" className="w-full " />
        </View>
    );
};

export default GlobalSearch;
