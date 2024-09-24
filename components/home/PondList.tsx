import React from "react";
import {
    NativeScrollEvent,
    NativeSyntheticEvent,
    Text,
    View,
} from "react-native";
import PondItem from "./PondItem";

const ponds = [
    {
        name: "Ao số 1",
        image: "https://chephamvisinh.vn/wp-content/uploads/2020/08/ao-nuoi-tom-ca-o-nhiem-gay-thiet-hai-lon-cho-nguoi-nuoi.jpg",
    },
    {
        name: "Ao số 2",
        image: "https://tepbac.com/upload/images/2022/11/nuoi-tom-01_1669264769.jpg",
    },
    {
        name: "Ao số 3",
        image: "https://tepbac.com/upload/images/2022/11/nuoi-tom-01_1669264769.jpg",
    },
    {
        name: "Ao số 4",
        image: "https://chephamvisinh.vn/wp-content/uploads/2020/08/ao-nuoi-tom-ca-o-nhiem-gay-thiet-hai-lon-cho-nguoi-nuoi.jpg",
    },
];

type Props = {
    onScrollBeginDrag?:
        | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
        | undefined;
    onScroll?:
        | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
        | undefined;
};

const PondList = ({ onScrollBeginDrag, onScroll }: Props) => {
    return (
        <View className="my-5">
            <Text className="mb-3 text-xl font-semibold">
                Danh sách ao nuôi
            </Text>
            {/* <FlatList
                keyExtractor={(_, index) => index.toString() + Math.random()}
                data={ponds}
                renderItem={({ item }) => (
                    <PondItem name={item.name} image={item.image}></PondItem>
                )}
                numColumns={1}
                scrollEventThrottle={10}
                onScrollBeginDrag={onScrollBeginDrag}
                onScroll={onScroll}
                showsVerticalScrollIndicator={false}
            ></FlatList> */}
            {ponds.map((pond, index) => (
                <PondItem
                    key={index}
                    name={pond.name}
                    image={pond.image}
                ></PondItem>
            ))}
        </View>
    );
};

export default PondList;
