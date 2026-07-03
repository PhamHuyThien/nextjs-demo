"use client"

import {useRouter} from "next/navigation";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import LoadingPage from "@/app/(clients)/_components/loading-page";

export default function RequiredLogin({children}) {
    const {user} = useApp();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(function () {
            if (!user) {
                toast.error('Vui lòng đăng nhập để truy cập trang này');
                router.push('/login');
            } else {
                setLoading(false);
            }
        }, 500);
        return () => clearTimeout(timeOut);
    }, [user, router]);

    if (!user || loading) {
        return <LoadingPage/>; // Hoặc bạn có thể return một component <LoadingSpinner /> tại đây
    }
    return <>{children}</>;
}