import {SettingProvider} from "./setting.context.jsx";
import {UserProvider} from "./user.context.jsx";

export default function AppContext({children}) {
    return (
        <SettingProvider>
            <UserProvider>{children}</UserProvider>
        </SettingProvider>
    )
}