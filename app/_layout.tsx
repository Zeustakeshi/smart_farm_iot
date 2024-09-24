import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { MonitorAlertProvider } from "./context/MonitorAlertContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "/(tabs)/profile",
};

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView className="flex-1 bg-white">
            <MonitorAlertProvider>
                <Stack>
                    ' '
                    <Stack.Screen
                        name="predict"
                        options={{ headerShown: false }}
                    />
                </Stack>
                <StatusBar style="auto" />
            </MonitorAlertProvider>
        </SafeAreaView>
    );
}
