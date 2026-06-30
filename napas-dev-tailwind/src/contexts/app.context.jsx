import {SettingProvider} from "./setting.context.jsx";
import {UserProvider} from "./user.context.jsx";
import {ToastProvider} from "./toast.context.jsx";

export default function AppContext({children}) {
    return (
        <SettingProvider>
            <UserProvider>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </UserProvider>
        </SettingProvider>
    )
}