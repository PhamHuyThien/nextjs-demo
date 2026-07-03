"use client";

import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import {useSession} from "next-auth/react";
import {getUser} from "@/app/_actions/auth-action";

export default function AppInitializer() {
    const {user, login, logout, setUser} = useApp();
    const {data: session, status} = useSession();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        try {
            if (session?.user) {
                setUser(session.user);
            }
        } catch (error) {
            logout();
            console.error("fetchUser error", error);
        }
    }, [session, pathname, status, logout, setUser]);


    useEffect(() => {
        if (!user) return;
        const interval = setInterval(async () => {
            if (user) {
                const newData = await getUser();
                if (newData.code === 401) {
                    logout();
                }
                if (newData.code === 403) {
                    router.push('/');
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [login, logout, router, user]);

    return null;
}