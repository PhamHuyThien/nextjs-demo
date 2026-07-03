"use client";

import Link from "next/link";
import { signOut } from "next-auth/react"; // Nếu dùng auth v4 client
import { useApp } from "@/app/(clients)/_providers/app-provider";

export default function Header() {
    const { user } = useApp(); // Lấy thông tin user từ context toàn cục của bạn

    const handleLogout = async () => {
        // Nếu dùng NextAuth v4, gọi signOut để hủy cookie session và đẩy về login
        await signOut({ callbackUrl: "/login" });
    };

    return (
        <header className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
            {/* Phần bên trái: Logo ứng dụng */}
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl font-bold tracking-wide text-primary">
                    My App Logo
                </Link>
            </div>

            {/* Phần bên phải: Trạng thái User */}
            <div className="flex-none gap-4">
                {user ? (
                    /* TRƯỜNG HỢP: ĐÃ ĐĂNG NHẬP */
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost gap-2 normal-case avatar">
                            {/* Hiển thị Tên User */}
                            <span className="hidden md:inline-block font-medium text-base-content/80">
                                {user.name}
                            </span>

                            {/* Icon User hình tròn giả lập Avatar */}
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                                {user.name?.charAt(0).toUpperCase() || "U"}
                            </div>
                        </div>

                        {/* Menu thả xuống (Dropdown Options) */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                            <li className="menu-title px-4 py-2 text-xs font-semibold text-base-content/50">
                                {user.email}
                            </li>
                            <div className="divider my-0"></div>
                            <li>
                                {user.role === "admin" ? (
                                    <Link href="/admin" className="text-error font-medium">Bảng điều khiển Admin</Link>
                                ) : (
                                    <Link href="#">Bảng điều khiển User</Link>
                                )}
                            </li>
                            <li><Link href="#">Hồ sơ cá nhân</Link></li>
                            <div className="divider my-0"></div>
                            <li>
                                <button onClick={handleLogout} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950">
                                    Đăng xuất
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    /* TRƯỜNG HỢP: CHƯA ĐĂNG NHẬP */
                    <div className="flex items-center gap-2">
                        <Link href="/login" className="btn btn-ghost btn-sm normal-case">
                            Đăng nhập
                        </Link>
                        <Link href="/register" className="btn btn-primary btn-sm normal-case shadow-sm">
                            Đăng ký
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}