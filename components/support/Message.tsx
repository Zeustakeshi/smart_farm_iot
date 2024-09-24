import { MessageType } from "@/common/type/message.type";
import React from "react";
import { Text, View } from "react-native";
import AnimatedTyping from "../ui/AnimatedTyping";

type Props = { onTextLoaded?: () => void } & MessageType;

const Message = ({ content, isAI = false, onTextLoaded }: Props) => {
    return (
        <View
            className="bg-slate-100 my-2 px-5 py-4 rounded-xl"
            style={{
                alignSelf: isAI ? "flex-start" : "flex-end",
                backgroundColor: isAI ? "#f1f5f9" : "#0B7FB5",
            }}
        >
            {isAI && (
                <AnimatedTyping
                    onTextLoaded={onTextLoaded}
                    text={content}
                    animatedTime={10}
                ></AnimatedTyping>
            )}
            {!isAI && <Text className="w-min text-white">{content}</Text>}
        </View>
    );
};

export default Message;
