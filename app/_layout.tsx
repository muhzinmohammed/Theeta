import { useAuthStore } from "@/utils/authStore";
import { supabase } from "@/utils/supabase";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const {isLoggedIn} = useAuthStore();
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);
  
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            <Stack.Protected guard={isLoggedIn}>
              <Stack.Screen name="(tabs)" options={{headerShown: false}} />
              <Stack.Screen name="restaurant/[id]" options={{headerShown:false}} />
              <Stack.Screen name="food/[id]" options={{headerShown:false}} />
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