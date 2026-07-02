"use client";

import {useEffect} from "react";
import {usePathname} from "next/navigation";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import {useSession} from "next-auth/react";
import {getUser} from "@/app/_actions/auth-action";

export default function AppInitializer() {
    const {user, login, logout} = useApp();
    const { data: session, status } = useSession();
    const pathname = usePathname();

    useEffect(() => {
        try {
            if (session?.user) {
                login(session.user);
            }
        } catch (error) {
            logout();
            console.error("fetchUser error", error);
        }
    }, [session, pathname, status, login, logout]);


    useEffect(() => {
        if (!user) return;
        const interval = setInterval(async () => {
            if (user) {
                const newData = await getUser();
                if (newData.code === 401) {
                    logout();
                }
                if (newData.code === 200) {
                    login(newData);
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [login, logout, user]);

    return null;
}