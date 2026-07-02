'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {LayoutDashboard, LogOut, Menu, Users} from 'lucide-react';
import {useApp} from '@/app/(clients)/_providers/app-provider';
import toast from 'react-hot-toast';

export default function AdminLayout({children}) {
    const pathname = usePathname();
    const router = useRouter();
    const {showLoading, hideLoading, logout} = useApp();

    const handleLogout = async () => {
        showLoading();
        // Giả lập gọi API SignOut / Xóa Cookie
        await new Promise((resolve) => setTimeout(resolve, 1000));
        logout();
        hideLoading();
        toast.success('Đăng xuất thành công!');
        router.push('/login');
    };

    const menuItems = [
        {name: 'Dashboard Tổng Quan', path: '/dashboard', icon: <LayoutDashboard className="w-5 h-5"/>},
        {name: 'Quản Lý Người Dùng', path: '/', icon: <Users className="w-5 h-5"/>}, // Đặt trang chủ main làm danh sách user theo ý bạn
    ];

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-base-200">
            <input id="admin-sidebar-drawer" type="checkbox" className="drawer-toggle"/>

            {/* KHU VỰC NỘI DUNG CHÍNH (MAIN CONTENT) */}
            <div className="drawer-content flex flex-col">

                {/* Top Navbar */}
                <div className="navbar bg-base-100 border-b border-base-300 lg:px-8 shadow-sm">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="admin-sidebar-drawer" className="btn btn-square btn-ghost drawer-button">
                            <Menu className="w-6 h-6"/>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-bold text-xl text-primary lg:hidden">Admin Panel</div>
                    <div className="flex-1 hidden lg:block text-sm breadcrumbs text-base-content/60">
                        <ul>
                            <li>Hệ thống</li>
                            <li className="font-semibold text-base-content">Quản trị viên</li>
                        </ul>
                    </div>

                    {/* Nút Đăng xuất trên Header */}
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                    <span>AD</span>
                                </div>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-base-200">
                                <li><a className="text-error font-medium" onClick={handleLogout}><LogOut
                                    className="w-4 h-4"/> Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Nội dung Page con nạp tại đây */}
                <main className="p-4 lg:p-8 flex-grow">
                    {children}
                </main>
            </div>

            {/* THANH SIDEBAR (CỐ ĐỊNH BÊN TRÁI) */}
            <div className="drawer-side z-20 shadow-xl border-r border-base-300">
                <label htmlFor="admin-sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content flex flex-col justify-between">

                    <div>
                        {/* Logo/Brand */}
                        <div className="flex items-center gap-3 px-4 py-3 mb-6 border-b border-base-200">
                            <div
                                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">A
                            </div>
                            <span className="font-bold text-xl tracking-wider text-primary">ADMIN CONSOLE</span>
                        </div>

                        {/* Menu Chức năng */}
                        <ul className="space-y-1">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium ${
                                                isActive ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' : 'hover:bg-base-200'
                                            }`}
                                        >
                                            {item.icon}
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Nút đăng xuất nhanh dưới đáy Sidebar */}
                    <div className="border-t border-base-200 pt-4">
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline btn-error w-full gap-2 rounded-xl"
                        >
                            <LogOut className="w-5 h-5"/>
                            Đăng xuất hệ thống
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}