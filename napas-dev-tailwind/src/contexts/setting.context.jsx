import {createContext, useContext, useState} from "react";

const SettingContext = createContext(null);

export function SettingProvider({children}) {
    const [setting, setSetting] = useState({});

    return (
        <SettingContext.Provider value={{setting, setSetting}}>
            {children}
        </SettingContext.Provider>
    )
}

export function useSetting() {
    return useContext(SettingContext)
}