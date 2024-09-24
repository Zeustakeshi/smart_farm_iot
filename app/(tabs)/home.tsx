import ButtonAddPond from "@/components/home/ButtonAddPond";
import DashboardMenu from "@/components/home/DashboardMenu";
import HomeBanner from "@/components/home/HomeBanner";
import PondList from "@/components/home/PondList";
import ScreenWrapper from "@/components/wrapper/ScreenWrapper";
import React, { useRef } from "react";
import { Animated, ScrollView, View } from "react-native";

type Props = {};

const MAX_HEADER_HEIGHT = 60;
const MIN_HEADER_HEIGHT = 0;
const SCROLL_DISTANCE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;
const LIMIT_MODULE_ITEM = 5;

const home = (props: Props) => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const startAnimation = () => {
        Animated.timing(scrollOffsetY, {
            toValue: SCROLL_DISTANCE,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };
    return (
        <View className="relative flex-1 bg-white ">
            <HomeBanner value={scrollOffsetY}></HomeBanner>
            <ScreenWrapper>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    onScrollBeginDrag={startAnimation}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { y: scrollOffsetY },
                                },
                            },
                        ],
                        {
                            useNativeDriver: false,
                        }
                    )}
                >
                    <DashboardMenu></DashboardMenu>
                    <PondList></PondList>
                </ScrollView>
                <ButtonAddPond></ButtonAddPond>
            </ScreenWrapper>
        </View>
    );
};

export default home;
