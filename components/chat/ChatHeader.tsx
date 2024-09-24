import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {};

const ChatHeader = (props: Props) => {
    return (
        <View className="w-full px-5 py-5 bg-primary rounded-b-2xl flex-row space-x-2 justify-between itemcen">
            <View className="flex-row justify-start space-x-2">
                <MaterialIcons name="support-agent" size={32} color="white" />
                <Text className="text-white text-lg font-semibold">
                    Tư vấn giải pháp
                </Text>
            </View>
            <Pressable>
                <Feather name="info" size={24} color="white" />
            </Pressable>
        </View>
    );
};

export default ChatHeader;
