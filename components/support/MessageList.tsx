import { MessageType } from "@/common/type/message.type";
import { sleep } from "@/lib/utils";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    TextInput,
    View,
} from "react-native";
import Message from "./Message";
import MessageYesNo from "./MessageYesNo";

type Props = {};

const aiMessages: MessageType[] = [
    {
        type: "NORMAL",
        content: `Chào anh Ba! Nồng độ NH3 trong ao cá của anh hiện đang cao ở mức 1.2 mg/L, vượt ngưỡng an toàn cho cá basa. Điều này có thể gây căng thẳng cho cá và ảnh hưởng đến sự phát triển của chúng. \n 
Tôi đề xuất một số giải pháp để khắc phục vấn đề:\n
1. Bơm thêm nước sạch: Bơm 500 lít nước sạch vào ao để làm loãng NH3 và xả lượng nước cũ tương đương.\n
2. Sử dụng Zeolite: Thêm Zeolite để hấp thụ NH3 và trung hòa môi trường nước.\n
3. Tăng cường sục khí: Kích hoạt hệ thống sục khí để tăng oxy hòa tan, giúp vi khuẩn phân hủy NH3`,
        isAI: true,
    },
    {
        content: `Anh có muốn tôi thực hiện ngay giải pháp bơm thêm nước sạch (giải pháp số 1), vì đây là biện pháp nhanh và hiệu quả nhất trong tình huống hiện tại?`,
        isAI: true,
        type: "YES_NO",
    },
    {
        content: `Anh đã xác nhận. Tôi sẽ tiến hành bơm 500 lít nước sạch vào ao và thoát nước cũ để làm loãng NH3. Quá trình sẽ mất khoảng 15 phút. Tôi sẽ cập nhật tình hình sau khi hoàn thành.`,
        isAI: true,
        type: "NORMAL",
    },
];

const MessageList = (props: Props) => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const aiMessageIndex = useRef<number>(0);

    useEffect(() => {
        const initMessage = async () => {
            for (let i = 0; i < 2; ++i) {
                setMessages((messages) => [
                    ...messages,
                    aiMessages[aiMessageIndex.current],
                ]);
                increaseAiMessageIndex();
                await sleep(10000);
            }
        };
        initMessage();
    }, []);

    const increaseAiMessageIndex = (n?: number) => {
        if (aiMessageIndex.current >= aiMessages.length) return;
        aiMessageIndex.current = aiMessageIndex.current + (n ?? 1);
    };

    const handleSubmit = async (message: string) => {
        if (inputText.trim().length < 0) return;
        setMessages((messages) => [
            ...messages,
            {
                content: message,
                type: "NORMAL",
            },
        ]);
        setInputText("");
        setLoading(true);
        await sleep(2000);
        setMessages((messages) => [
            ...messages,
            aiMessages[aiMessageIndex.current],
        ]);
        increaseAiMessageIndex();
    };

    return (
        <View className="flex flex-1">
            <FlatList
                data={messages}
                renderItem={({ item }) =>
                    item?.type === "YES_NO" ? (
                        <MessageYesNo
                            content={item.content}
                            onChooseNo={() => {}}
                            onChooseYes={() => {
                                handleSubmit("Đồng ý");
                            }}
                            type={item?.type}
                        ></MessageYesNo>
                    ) : (
                        <Message
                            {...item}
                            onTextLoaded={() => setLoading(false)}
                        />
                    )
                }
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />

            <View className="p-2 flex flex-row w-full space-x-3 items-center">
                <TextInput
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    className="border px-4 py-2 rounded-full flex-1"
                    placeholder="Nhập tin nhắn ..."
                ></TextInput>
                <Pressable
                    disabled={loading}
                    onPress={() => handleSubmit(inputText)}
                    className="bg-primary rounded-full p-2"
                >
                    {loading ? (
                        <ActivityIndicator />
                    ) : (
                        <AntDesign name="arrowup" size={24} color="white" />
                    )}
                </Pressable>
            </View>
        </View>
    );
};

export default MessageList;
