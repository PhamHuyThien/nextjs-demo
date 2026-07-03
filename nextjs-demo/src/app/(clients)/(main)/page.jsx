"use client";

import Link from "next/link";
import {useApp} from "@/app/(clients)/_providers/app-provider";
import {adminGetDashboard} from "@/app/_actions/admin/user-action";
import toast from "react-hot-toast";

export default function Home() {
    const {user} = useApp();

    async function onClickTestGetDashboardInfo() {
        try {
            const res = await adminGetDashboard();
            if (res.code !== 200) {
                return toast.error(res.message);
            }
            toast.success(res.message);
        } catch (e) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        }
    }

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="hero bg-base-100 rounded-2xl shadow-sm p-6 md:p-12 border border-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-extrabold md:text-5xl">
                            Chào mừng đến với <span className="text-primary">Next.js Demo</span>
                        </h1>
                        <p className="py-6 text-base-content/70">
                            Hệ thống quản lý phân quyền Admin/User sử dụng NextAuth, Drizzle ORM kết hợp cơ sở dữ liệu
                            MySQL.
                        </p>

                        {user ? (
                            <div className="bg-base-200 rounded-xl p-4 mb-4 text-left">
                                <p className="text-sm font-semibold text-primary">Thông tin tài khoản hiện tại:</p>
                                <div className="text-xs space-y-1 mt-2 text-base-content/80">
                                    <p><strong>Họ tên:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Quyền hạn:</strong> <span
                                        className="badge badge-sm badge-accent">{user.role}</span></p>
                                </div>
                                <div className={"mt-5"}>
                                    <button onClick={onClickTestGetDashboardInfo} className="btn btn-primary btn-sm mt-2">Test API admin</button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-center gap-4">
                                <Link href="/login" className="btn btn-primary px-6">Khám phá ngay</Link>
                                <Link href="/register" className="btn btn-outline">Tìm hiểu thêm</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}