import React, { ReactNode } from "react";
import { View } from "react-native";

type Props = {
    children?: ReactNode;
    className?: string;
};

const Card = ({ className, children }: Props) => {
    return <View className={className}>{children}</View>;
};

export default Card;
