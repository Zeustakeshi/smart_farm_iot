import ChatHeader from "@/components/chat/ChatHeader";
import ChatList from "@/components/chat/ChatList";
import React from "react";
import { View } from "react-native";

const chat = () => {
    return (
        <View className="flex-1 bg-white">
            <ChatHeader></ChatHeader>
            <ChatList></ChatList>
        </View>
    );
};

export default chat;
