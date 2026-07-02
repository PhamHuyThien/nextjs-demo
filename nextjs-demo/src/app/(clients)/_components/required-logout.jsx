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
        if (user) {
            toast.error("Vui lòng đăng xuất trước!");
            // Quay lại trang ngay trước đó họ vừa đứng
            router.back();
        } else {
            // Nếu chưa đăng nhập thì cho phép xem nội dung trang (Login/Register)
            setIsChecking(false);
        }
    }, [user, router]);

    // Trong lúc đang điều hướng quay lại, hiển thị màn hình trống hoặc loading nhẹ
    if (user || isChecking) {
        return <LoadingPage/>;
    }

    return <>{children}</>;
}