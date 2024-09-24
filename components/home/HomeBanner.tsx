import React from "react";
import { Animated, Text, View } from "react-native";
import GlobalSearch from "../search/GlobalSearch";
import Avatar from "../ui/Avatar";

const MAX_HEADER_HEIGHT = 160;
const MIN_HEADER_HEIGHT = 80;
const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

type Props = { value: any };

const HomeBanner = ({ value }: Props) => {
    const animatedHeaderHeight = value.interpolate({
        inputRange: [0, SCROLL_DISTANCE],
        outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
        extrapolate: "clamp",
    });

    const heightForElements = value.interpolate({
        inputRange: [0, SCROLL_DISTANCE / 2], // At 50% scroll
        outputRange: [80, 0], // Fully visible at the start, hidden at 50%
        extrapolate: "clamp",
    });

    return (
        <Animated.View
            style={{ height: animatedHeaderHeight }}
            className="relative bg-primary p-5  rounded-b-2xl"
        >
            <Animated.View
                style={{ height: heightForElements, overflow: "hidden" }}
                className="flex-row w-full justify-between"
            >
                <View>
                    <Text className="font-semibold text-white text-2xl">
                        Xin chào
                    </Text>
                    <Text className="font-semibold text-white text-sm my-2">
                        Chào buổi chiều
                    </Text>
                </View>
                <View className="flex flex-row space-x-2 justify-end items-center">
                    {/* <Pressable className="mr-2 bg-white/50 rounded-full shadow-lg w-[40] h-[40] justify-center items-center">
                        <Octicons name="bell-fill" size={20} color="white" />
                    </Pressable> */}
                    <Avatar></Avatar>
                </View>
            </Animated.View>
            <View className="">
                <GlobalSearch></GlobalSearch>
            </View>
        </Animated.View>
    );
};

export default HomeBanner;
