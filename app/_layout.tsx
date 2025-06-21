import { AuthProvider } from "@/utils/authContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  return (
    <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack>
                <Stack.Screen name="(protected)" options={{headerShown: false}} />
                <Stack.Screen name="login" options={{headerShown: false}} />
            </Stack>
        </GestureHandlerRootView>
    </AuthProvider>
  ) 
}