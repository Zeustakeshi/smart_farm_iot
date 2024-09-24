import TabIcon from "@/components/ui/TabIcon";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
    return (
        <View className="flex-1 bg-white">
            <Tabs
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#f8fafc",
                        shadowColor: "#cbd5e1",
                    },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#0B7FB5",
                    tabBarInactiveTintColor: "#cbd5e1",
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        shadowOpacity: 0,
                        paddingVertical: 5,
                        alignItems: "center",
                        height: 60,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderWidth: 0,
                        borderColor: "",
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerTitle: "Trang chủ",
                        tabBarIcon: (props) => (
                            <TabIcon
                                Icon={Octicons}
                                iconName="home"
                                label="Trang chủ"
                                {...props}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="chat"
                    options={{
                        headerTitle: "Nhắn tin",
                        tabBarIcon: (props) => (
                            <TabIcon
                                Icon={Ionicons}
                                iconName="chatbubble-ellipses-outline"
                                label="Tư vấn"
                                {...props}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="notification"
                    options={{
                        headerTitle: "Thông báo",
                        tabBarIcon: (props) => (
                            <TabIcon
                                Icon={Ionicons}
                                iconName="notifications-outline"
                                label="Trang chủ"
                                {...props}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        headerTitle: "Cá nhân",
                        tabBarIcon: (props) => (
                            <TabIcon
                                Icon={AntDesign}
                                iconName="user"
                                label="Trang chủ"
                                {...props}
                            />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
