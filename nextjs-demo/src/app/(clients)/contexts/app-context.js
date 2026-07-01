// src/app/providers.jsx
'use client';

import React, {createContext, useContext, useState} from 'react';
import {Toaster} from 'react-hot-toast'; // Hoặc bất kỳ thư viện toast nào bạn thích

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
            {children}
            {/* 2. Cắm Toast Alert ở tầng global tại đây */}
            <Toaster position="top-right" reverseOrder={false}/>
            {/* LỚP PHỦ LOADING TOÀN TRANG (FULLSCREEN OVERLAY) */}
            {isLoading && (
                <div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm select-none pointer-events-auto">
                    <div
                        className="bg-base-100 p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 border border-base-300">
                        {/* Vòng xoay loading của daisyUI */}
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                        <p className="text-sm font-semibold text-base-content animate-pulse">
                            Vui lòng đợi trong giây lát...
                        </p>
                    </div>
                </div>
            )}
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