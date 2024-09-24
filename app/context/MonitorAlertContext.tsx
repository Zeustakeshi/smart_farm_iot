import { WaterQualityStatus } from "@/common/type/monitor.type";
import { waterQualityStatusColors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

type MonitorAlertProviderProps = {
    children: React.ReactNode;
};

interface IMonitorAlertContext {
    alert: (messages: { message: string; type: WaterQualityStatus }[]) => void;
}

const MonitorAlertContext = React.createContext<IMonitorAlertContext | null>(
    null
);

const MonitorAlertProvider: React.FC<MonitorAlertProviderProps> = ({
    children,
}) => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [messages, setMessages] = useState<
        { message: string; type: WaterQualityStatus }[]
    >([]);

    const alert = React.useCallback(
        (messages: { message: string; type: WaterQualityStatus }[]) => {
            setShowAlert(true);
            setMessages(messages);
        },
        []
    );

    const values = { alert };

    return (
        <MonitorAlertContext.Provider value={values}>
            {children}
            <Modal isVisible={showAlert}>
                <View className="relative bg-white p-4 rounded-xl">
                    <View className="w-full flex-row justify-end">
                        <Pressable
                            onPress={() => setShowAlert(false)}
                            className="  rounded-full w-[25] h-[25] flex justify-center items-center"
                        >
                            <Ionicons
                                name="close-sharp"
                                size={24}
                                color="black"
                            />
                        </Pressable>
                    </View>
                    <View className="flex justify-center items-center gap-2">
                        <View className="p-2 w-[50] h-[50] bg-rose-600/20 rounded-full">
                            <Image
                                className="w-full h-full object-cover"
                                source={require("@/assets/images/error/error.png")}
                            ></Image>
                        </View>
                        <Text className="text-2xl font-semibold">Cảnh báo</Text>
                    </View>
                    <View className="w-full h-[1] bg-slate-100 my-2"></View>

                    <View className="gap-2">
                        <FlatList
                            data={messages}
                            renderItem={({ item }) => (
                                <Text
                                    style={{
                                        color: waterQualityStatusColors[
                                            item.type
                                        ],
                                    }}
                                    className=" font-medium"
                                >
                                    - {item.message}
                                </Text>
                            )}
                            keyExtractor={(item) =>
                                JSON.stringify(item.message)
                            }
                        />
                    </View>

                    <View className="w-full h-[1] bg-slate-100 my-2"></View>
                    <View className="flex flex-row justify-between items-center gap-3">
                        <Pressable
                            onPress={() => {
                                setShowAlert(false);
                                router.push("/support");
                            }}
                            className="flex-1 bg-primary px-5 py-3 rounded-xl"
                        >
                            <Text className="text-center text-white font-semibold">
                                Cách giải quyết
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </MonitorAlertContext.Provider>
    );
};

const useMonitorAlert = () => {
    const context = React.useContext(MonitorAlertContext);
    if (typeof context === "undefined" || !context) {
        throw new Error(
            "useMonitorAlert must be used within MonitorAlertProvider"
        );
    }
    return context;
};

export { MonitorAlertProvider, useMonitorAlert };
