import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../ui/Button";

const aquacultureSpecies = [
    {
        id: "1",
        value: "PANGASIUS_CATFISH",
        label: "Cá tra",
    },
    {
        id: "2",
        value: "BASA_CATFISH",
        label: "Cá ba sa",
    },
    {
        id: "3",
        value: "BLACK_TIGER_SHRIMP",
        label: "Tôm sú",
    },
    {
        id: "4",
        value: "WHITELEG_SHRIMP",
        label: "Tôm thẻ chân trắng",
    },
    {
        id: "5",
        value: "TILAPIA",
        label: "Cá rô phi",
    },
    {
        id: "6",
        value: "COMMON_CARP",
        label: "Cá chép",
    },
    {
        id: "7",
        value: "SNAKEHEAD_FISH",
        label: "Cá lóc",
    },
    {
        id: "8",
        value: "MARBLE_GOBY",
        label: "Cá bống tượng",
    },
    {
        id: "9",
        value: "SEA_BASS",
        label: "Cá vược",
    },
    {
        id: "10",
        value: "CLAM",
        label: "Nghêu",
    },
];

const FarmInfoForm = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View className="space-y-5 w-full">
            <TextInput
                className="border-b border-b-slate-200 focus:border-b-primary p-2"
                placeholder="Tên trại"
            ></TextInput>
            <TextInput
                className="border-b border-b-slate-200 focus:border-b-primary p-2"
                placeholder="Địa chỉ trại"
            ></TextInput>
            <TextInput
                className="border-b border-b-slate-200 focus:border-b-primary p-2"
                placeholder="Diện tích trại"
                inputMode="numeric"
            ></TextInput>
            <View className="border rounded-xl border-slate-200">
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }
                >
                    {aquacultureSpecies.map(({ id, label, value }) => (
                        <Picker.Item key={id} label={label} value={value} />
                    ))}
                </Picker>
            </View>
            <Button onPress={() => router.push("/(tabs)/home")}>
                <Text className="text-white text-center">Xác nhận</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownButtonTxtStyle: {
        flex: 1,
    },
});

export default FarmInfoForm;
