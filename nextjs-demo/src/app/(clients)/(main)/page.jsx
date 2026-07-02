"use client";

import Link from "next/link";
import {useApp} from "@/app/(clients)/_providers/app-provider";

export default function Home() {
    const {user} = useApp();

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