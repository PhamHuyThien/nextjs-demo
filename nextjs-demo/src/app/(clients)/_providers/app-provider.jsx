'use client';

import React, {createContext, useContext, useState} from 'react';
import {Toaster} from 'react-hot-toast';
import LoadingPage from "@/app/(clients)/_components/loading-page";
import {SessionProvider, signIn, signOut} from "next-auth/react";

const AppContext = createContext(undefined);

export function AppProvider({children}) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);
    const login = async (email, password, redirect = false) => {
        return await signIn("credentials", {
            email,
            password,
            redirect,
            callbackUrl: "/login"
        });
    }
    const logout = async () => {
        setUser(null);
        await signOut({callbackUrl: "/login"});
    }

    return (
        <AppContext.Provider value={{user, setUser, login, logout, isLoading, showLoading, hideLoading}}>
            <SessionProvider>
                {children}
                <Toaster position="top-right" reverseOrder={false}/>
                {isLoading && <LoadingPage/>}
            </SessionProvider>
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp phải được sử dụng bên trong AppProvider');
    }
    return context;
}