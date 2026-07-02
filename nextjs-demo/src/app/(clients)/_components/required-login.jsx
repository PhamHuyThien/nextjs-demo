"use client"

import {useRouter} from "next/navigation";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import LoadingPage from "@/app/(clients)/_components/loading-page";

export default function RequiredLogin({children}) {
    const {user} = useApp();
    const router = useRouter();
    // Mặc định ban đầu là TRUE (Hệ thống đang trong quá trình check)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            toast.error('Vui lòng đăng nhập để truy cập trang này');
            router.push('/login');
        } else {
            // Nếu đã có user, tắt trạng thái loading để hiển thị children
            setLoading(false);
        }
    }, [user, router]);

    // Trong lúc chưa có user HOẶC hệ thống đang bận check điều hướng -> Block giao diện không cho xem
    if (!user || loading) {
        return <LoadingPage/>; // Hoặc bạn có thể return một component <LoadingSpinner /> tại đây
    }

    return <>{children}</>;
}