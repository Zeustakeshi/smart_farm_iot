import React, { ReactNode } from "react";
import { View } from "react-native";

type Props = { children: ReactNode };

const ScreenWrapper = ({ children }: Props) => {
    return <View className="p-2 flex-1">{children}</View>;
};

export default ScreenWrapper;
