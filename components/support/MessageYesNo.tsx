import { MessageType } from "@/common/type/message.type";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import AnimatedTyping from "../ui/AnimatedTyping";

type Props = {
    onTextLoaded?: () => void;
    onChooseYes: () => void;
    onChooseNo: () => void;
} & MessageType;

const MessageYesNo = ({
    content,
    onTextLoaded,
    onChooseYes,
    onChooseNo,
}: Props) => {
    const [choosed, setChoosed] = useState<boolean>(true);
    return (
        <View
            className="bg-slate-100 my-2 px-5 py-4 rounded-xl"
            style={{
                alignSelf: "flex-start",
                backgroundColor: "#f1f5f9",
            }}
        >
            <AnimatedTyping
                onTextLoaded={() => {
                    onTextLoaded?.();
                    setChoosed(false);
                }}
                text={content}
                animatedTime={10}
            ></AnimatedTyping>
            {!choosed && (
                <View className="flex-row space-x-2 my-3">
                    <Pressable
                        onPress={() => {
                            onChooseYes();
                            setChoosed(true);
                        }}
                        className="px-5 py-3 rounded-xl bg-primary flex-1"
                    >
                        <Text className="text-white font-semibold text-center">
                            Đồng ý
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            onChooseNo();
                            setChoosed(true);
                        }}
                        className="px-5 py-3 flex-1 bg-primary/10 rounded-md"
                    >
                        <Text className="text-center text-primary font-semibold">
                            Thôi
                        </Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};

export default MessageYesNo;
