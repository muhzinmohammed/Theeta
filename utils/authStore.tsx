import { Session, User } from "@supabase/supabase-js";
import { deleteItemAsync, getItem, setItem } from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { supabase } from "./supabase"; // your Supabase client

type AuthState = {
  session: Session | null;
  user: User | null;
  isLoggedIn: boolean;

  // Actions
  setSession: (session: Session | null) => void;
  logOut: () => Promise<void>;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      session: null,
      user: null,
      isLoggedIn: false,

      setSession: (session) => {
        set(() => ({
          session,
          user: session?.user ?? null,
          isLoggedIn: !!session,
        }));
      },

      logOut: async () => {
        await supabase.auth.signOut();
        set(() => ({
          session: null,
          user: null,
          isLoggedIn: false,
        }));
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        setItem,
        getItem,
        removeItem: deleteItemAsync,
      })),
    }
  )
);
