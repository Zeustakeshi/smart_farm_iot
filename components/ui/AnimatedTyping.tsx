import React, { useEffect, useState } from "react";
import { Text, TextProps } from "react-native";

type Props = {
    text: string;
    animatedTime?: number;
    onTextLoaded?: () => void;
} & TextProps;

const AnimatedTyping = ({
    text,
    animatedTime = 100,
    onTextLoaded,
    ...props
}: Props) => {
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText(text.substring(0, index));
            index++;
            if (index > text.length) {
                clearInterval(timer);
                onTextLoaded?.();
            }
        }, animatedTime);

        return () => clearInterval(timer);
    }, [text]);

    return <Text {...props}>{displayedText}</Text>;
};

export default AnimatedTyping;
