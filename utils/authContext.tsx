import { useRouter } from "expo-router";
import { Children, createContext, PropsWithChildren, useState } from "react";

type AuthState = {
     isLoggedIn: boolean;
     logIn: () => void;
     logOut: () => void;
}

export const AuthContext = createContext<AuthState>({
    isLoggedIn: true,
    logIn: () => {},
    logOut: () => {}
})

export function AuthProvider({children}:PropsWithChildren) {
    const [isLoggedIn,setIsLogedIn] = useState(false);
    const router = useRouter();
    const logIn = () => {
        setIsLogedIn(true);
        router.replace('/');
    }
    const logOut = () => {
        setIsLogedIn(false);
        router.replace('/login');
    }
    return(
        <AuthContext.Provider value={{isLoggedIn,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}