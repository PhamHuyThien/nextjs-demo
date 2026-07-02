"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useApp } from "@/app/(clients)/_providers/app-provider";
import { useSession } from "next-auth/react";

export default function AppInitializer() {
    const { login, logout } = useApp();
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

    return null;
}