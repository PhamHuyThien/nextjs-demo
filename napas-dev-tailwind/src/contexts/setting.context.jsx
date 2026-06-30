import {createContext, useContext, useEffect, useState} from "react";

const SettingContext = createContext(null);

export function SettingProvider({children}) {
    const [setting, setSetting] = useState({
        theme: 'light' // dark, light
    });

    useEffect(() => {
        const root = document.documentElement;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const applyTheme = () => {
            const systemTheme = mediaQuery.matches ? "dark" : "light";
            const finalTheme =
                setting.theme === "system" ? systemTheme : setting.theme;
            root.classList.toggle("dark", finalTheme === "dark");
        };
        applyTheme();
        mediaQuery.addEventListener("change", applyTheme);
        localStorage.setItem("theme", setting.theme);
        return () => mediaQuery.removeEventListener("change", applyTheme);
    }, [setting.theme]);

    const setTheme = (theme) => {
        setSetting(prev => ({...prev, theme}))
    }
    const toggleTheme = () => {
        setSetting(prev => ({...prev, theme: prev.theme === 'light' ? 'dark' : 'light'}))
    }

    return (
        <SettingContext.Provider value={{setting, setSetting, setTheme, toggleTheme}}>
            {children}
        </SettingContext.Provider>
    )
}

export function useSetting() {
    return useContext(SettingContext)
}