import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";
import DashboardMenuItem from "./DashboardMenuItem";

const menuItems = [
    {
        id: "1",
        title: "Thống kê",
        icon: require("@/assets/images/menu-bar/chart.png"),
        to: "/analytics",
    },
    {
        id: "2",
        title: "Tài chính",
        icon: require("@/assets/images/menu-bar/cash.png"),
        to: "/finance",
    },
    {
        id: "3",
        title: "Nhật ký",
        icon: require("@/assets/images/menu-bar/book.png"),
        to: "/",
    },
    {
        id: "4",
        title: "Kho",
        icon: require("@/assets/images/menu-bar/inventory.png"),
        to: "/",
    },
    {
        id: "5",
        title: "Dự đoán",
        icon: require("@/assets/images/menu-bar/predictive.png"),
        to: "/",
    },
    {
        id: "6",
        title: "Giá cả",
        icon: require("@/assets/images/menu-bar/price.png"),
        to: "/",
    },
    {
        id: "7",
        title: "Vụ nuôi",
        icon: require("@/assets/images/menu-bar/fish.png"),
        to: "/",
    },
];

type Props = {};

const DashboardMenu = ({}: Props) => {
    return (
        <Animated.View className="my-2">
            <Text className="mb-3 text-xl font-semibold">
                Quản lý và thống kê
            </Text>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => (
                    <DashboardMenuItem
                        title={item.title}
                        to={item.to}
                        icon={item.icon}
                    ></DashboardMenuItem>
                )}
                keyExtractor={(item, index) =>
                    (index + Math.random() + 1).toString()
                }
                columnWrapperStyle={styles.row}
                numColumns={4}
            ></FlatList>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    row: {
        justifyContent: "flex-start",
    },
});

export default DashboardMenu;
