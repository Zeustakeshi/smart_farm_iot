import React from "react";
import { Text, View } from "react-native";

type Props = {};

const Header = (props: Props) => {
    return (
        <View className="px-3 py-5 ">
            <Text className="text-2xl font-semibold ">Danh sách ao</Text>
        </View>
    );
};

export default Header;
