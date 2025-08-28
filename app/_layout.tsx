import { useAuthStore } from "@/utils/authStore";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const {isLoggedIn,hasAccount} = useAuthStore();
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Protected guard={isLoggedIn}>
              <Stack.Screen name="(tabs)" options={{headerShown: false}} />
              <Stack.Screen name="details/[restaurant]" options={{headerBackButtonDisplayMode: "minimal",
                headerTintColor:'rgb(190, 109, 2)'
              }} />
              <Stack.Screen name="user/[user]" options={{
                headerBackButtonDisplayMode: "minimal",
                headerTintColor:'rgb(190, 109, 2)',
                headerShadowVisible:false
              }} />
            </Stack.Protected>
            <Stack.Protected guard={!isLoggedIn}>
              <Stack.Screen name="(auth)" options={{headerShown: false}} />
            </Stack.Protected>
          </Stack>
      </GestureHandlerRootView>
  ) 
}