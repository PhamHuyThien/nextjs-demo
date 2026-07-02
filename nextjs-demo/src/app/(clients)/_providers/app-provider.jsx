'use client';

import React, {createContext, useContext, useState} from 'react';
import {Toaster} from 'react-hot-toast';
import LoadingPage from "@/app/(clients)/_components/loading-page";
import {SessionProvider} from "next-auth/react";

// 1. Tạo Context để chia sẻ state từ xa
const AppContext = createContext(undefined);

export function AppProvider({children}) {
    const [user, setUser] = useState(null); // State dùng chung toàn app
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(false); // State quản lý loading toàn trang

    const showLoading = () => setIsLoading(true);
    const hideLoading = () => setIsLoading(false);
    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <AppContext.Provider value={{user, login, logout, isLoading, showLoading, hideLoading}}>
            <SessionProvider>
                {children}
                <Toaster position="top-right" reverseOrder={false}/>
                {isLoading && <LoadingPage/>}
            </SessionProvider>
        </AppContext.Provider>
    );
}

// 3. Custom Hook để các page/component con lấy state từ xa cực nhanh
export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp phải được sử dụng bên trong AppProvider');
    }
    return context;
}