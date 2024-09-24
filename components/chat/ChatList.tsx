import React from "react";
import { View } from "react-native";
import ChatMessage from "./ChatMessage";

type Props = {};

const ChatList = (props: Props) => {
    return (
        <View className="px-3 py-5">
            <ChatMessage message="Chào ông Minh Hiếu!"></ChatMessage>
            <ChatMessage message="Tôi có một thông báo quan trọng liên quan đến chất lượng nước trong ao cá của ông."></ChatMessage>
            <ChatMessage message="Mức NH3 (ammonia) đang tăng lên. Điều này có thể ảnh hưởng xấu đến sức khỏe của cá. Tôi khuyến nghị ông nên kiểm tra hệ thống lọc và chất lượng nước ngay lập tức."></ChatMessage>

            <ChatMessage
                sender
                message=" Tôi phải làm gì tiếp theo?"
            ></ChatMessage>
        </View>
    );
};

export default ChatList;
