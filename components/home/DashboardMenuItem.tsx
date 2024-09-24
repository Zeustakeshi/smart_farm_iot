import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    icon: any;
    title: string;
    to: string;
};

const DashboardMenuItem = ({ icon, title, to }: Props) => {
    return (
        <Pressable
            onPress={() => router.push(to as any)}
            style={styles.container}
            className="  bg-slate-50 gap-y-1 w-[66] h-[66] flex justify-center items-center rounded-xl m-2 shadow-2xl"
        >
            <View className="w-[30] h-[30]">
                <Image
                    className="w-full h-full object-cover"
                    source={icon}
                ></Image>
            </View>
            <Text className="text-xs font-medium">{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        shadowColor: "#e2e8f0",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 4,
    },
});

export default DashboardMenuItem;
