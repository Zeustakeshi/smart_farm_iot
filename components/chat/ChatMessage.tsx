import React from "react";
import { Text, View } from "react-native";

type Props = {
    delayText?: boolean;
    sender?: boolean;
    message: string;
};

const ChatMessage = ({ delayText = true, sender = false, message }: Props) => {
    return (
        <View
            className="bg-slate-100 my-1 px-5 py-4 rounded-xl"
            style={{
                alignSelf: sender ? "flex-end" : "flex-start",
                backgroundColor: sender ? "#0B7FB5" : "",
            }}
        >
            <Text
                style={{
                    color: sender ? "white" : "",
                }}
                className="w-min"
            >
                {message}
            </Text>
        </View>
    );
};

export default ChatMessage;
