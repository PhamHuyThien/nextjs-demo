"use client";

import {useRouter} from "next/navigation";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import LoadingPage from "@/app/(clients)/_components/loading-page";

export default function RequiredOut({children}) {
    const {user} = useApp();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(function () {
            if (user) {
                toast.error("Vui lòng đăng xuất trước!");
                router.back();
            } else {
                setIsChecking(false);
            }
        }, 500);
        return () => clearTimeout(timeOut);
    }, [user, router]);


    if (user || isChecking) {
        return <LoadingPage/>;
    }
    return <>{children}</>;
}