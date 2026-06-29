import {createContext, useContext, useState} from "react";

const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState({
        username: '',
        email: '',
        role: '',
        isAdmin: false,
        isLoggedIn: false,
    });
    const login = (data) => {
        setUser({...data, isLoggedIn: true});
        localStorage.setItem('user', JSON.stringify(data));
    }
    const logout = () => {
        setUser({
            username: '',
            email: '',
            role: '',
            isAdmin: false,
            isLoggedIn: false,
        });
        localStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}