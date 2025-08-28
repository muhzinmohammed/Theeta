import { useAuthStore } from "@/utils/authStore";
import { Stack } from "expo-router";

export default function RootLayout() {
  const {isLoggedIn,hasAccount} = useAuthStore();
  return (
          <Stack>
              <Stack.Screen name="login" options={{headerShown: false}} />
              <Stack.Screen name="create_account" options={{headerShown: false}} />
          </Stack>
  ) 
}