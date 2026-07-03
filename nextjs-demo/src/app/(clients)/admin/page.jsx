'use client';

import React, { useEffect, useState } from 'react';
import { Check, Edit2, Search, Shield, Trash2, UserPlus, X, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { adminGetDashboard, adminGetUserList } from "@/app/_actions/admin/user-action";
import toast from "react-hot-toast";

export default function UserListPage() {
    const [pageable, setPageable] = useState({ page: 1, pageSize: 10, order: 'desc', orderBy: 'id' });
    const [paginationInfo, setPaginationInfo] = useState({ totalRecords: 0, totalPages: 1 });
    const [dashboard, setDashboard] = useState({});
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Hàm lấy danh sách kèm phân trang và sắp xếp
    async function getUserList() {
        const res = await adminGetUserList(searchTerm, pageable);
        if (res.code !== 200) {
            return toast.error(res.message);
        }
        setUsers(res.data.data);
        if (res.data.pagination) {
            setPaginationInfo({
                totalRecords: res.data.pagination.totalRecords,
                totalPages: res.data.pagination.totalPages
            });
        }
    }

    async function getDashboard() {
        const res = await adminGetDashboard();
        if (res.code !== 200) {
            return toast.error(res.message);
        }
        setDashboard(res.data);
    }

    useEffect(() => {
        getDashboard();
    }, []);

    // Kích hoạt lại API khi thay đổi page, pageSize, order, hoặc orderBy
    useEffect(() => {
        getUserList();
    }, [pageable]);

    // Khi gõ ô tìm kiếm, tự động reset về trang 1 để tránh lỗi hiển thị lệch trang
    useEffect(() => {
        setPageable(prev => ({ ...prev, page: 1 }));
        // Nếu trang hiện tại đã là 1, ta cần kích hoạt gọi hàm thủ công vì useEffect trên không tự chạy
        if (pageable.page === 1) {
            getUserList();
        }
    }, [searchTerm]);

    // Xử lý logic Thay đổi thứ tự sắp xếp khi click vào Header của cột
    const handleSort = (field) => {
        setPageable(prev => {
            const isSameField = prev.orderBy === field;
            const nextOrder = isSameField && prev.order === 'desc' ? 'asc' : 'desc';
            return {
                ...prev,
                page: 1, // Reset về trang đầu khi đổi kiểu sắp xếp
                orderBy: field,
                order: nextOrder
            };
        });
    };

    // Render icon mũi tên chỉ hướng sắp xếp của từng cột
    const renderSortIcon = (field) => {
        if (pageable.orderBy !== field) return <ArrowUpDown className="w-3.5 h-3.5 opacity-40 ml-1 inline" />;
        return pageable.order === 'asc'
            ? <ArrowUp className="w-3.5 h-3.5 text-primary ml-1 inline" />
            : <ArrowDown className="w-3.5 h-3.5 text-primary ml-1 inline" />;
    };

    // Xử lý chuyển trang chuyên nghiệp
    const changePage = (newPage) => {
        if (newPage < 1 || newPage > paginationInfo.totalPages) return;
        setPageable(prev => ({ ...prev, page: newPage }));
    };

    return (
        <div className="space-y-6">

            {/* Thẻ Thống Kê Tổng Quan Nhanh (Stats Card) */}
            <div className="stats shadow w-full bg-base-100 border border-base-300">
                <div className="stat">
                    <div className="stat-title text-sm">Tổng thành viên</div>
                    <div className="stat-value text-primary text-3xl">{dashboard?.total_users || 0}</div>
                    <div className="stat-desc text-xs mt-1">Tài khoản đã đăng ký hệ thống</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-sm">Đang hoạt động</div>
                    <div className="stat-value text-success text-3xl">{dashboard?.active_users || 0}</div>
                    <div className="stat-desc text-xs mt-1">Tài khoản không bị khóa</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-sm">Chờ xác minh</div>
                    <div className="stat-value text-warning text-3xl">{dashboard?.inactive_users || 0}</div>
                    <div className="stat-desc text-xs mt-1">Cần phê duyệt đăng ký</div>
                </div>
            </div>

            {/* Khu vực quản lý và Bộ lọc Table */}
            <div className="card w-full bg-base-100 border border-base-300 shadow-md">
                <div className="card-body p-4 sm:p-6">

                    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
                        <h3 className="font-bold text-xl text-base-content">
                            Danh Sách Tài Khoản <span className="text-xs font-normal opacity-65">({paginationInfo.totalRecords} bản ghi)</span>
                        </h3>

                        {/* Thanh Tìm Kiếm & Nút Thêm Mới */}
                        <div className="flex flex-col sm:flex-row gap-2 grow sm:justify-end">
                            <div className="input input-bordered flex items-center gap-2 input-sm sm:w-72">
                                <Search className="w-4 h-4 opacity-50"/>
                                <input
                                    type="text"
                                    placeholder="Tìm theo tên hoặc email..."
                                    className="grow text-xs"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary btn-sm gap-1 text-xs">
                                <UserPlus className="w-4 h-4"/> Thêm thành viên
                            </button>
                        </div>
                    </div>

                    {/* BẢNG DANH SÁCH (RESPONSIVE TABLE) */}
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full table-zebra">
                            <thead>
                            <tr className="bg-base-200">
                                <th className="cursor-pointer hover:bg-base-300 select-none" onClick={() => handleSort('id')}>
                                    ID {renderSortIcon('id')}
                                </th>
                                <th className="cursor-pointer hover:bg-base-300 select-none" onClick={() => handleSort('name')}>
                                    Người dùng {renderSortIcon('name')}
                                </th>
                                <th className="cursor-pointer hover:bg-base-300 select-none" onClick={() => handleSort('role')}>
                                    Vai trò {renderSortIcon('role')}
                                </th>
                                <th className="cursor-pointer hover:bg-base-300 select-none" onClick={() => handleSort('status')}>
                                    Trạng thái {renderSortIcon('status')}
                                </th>
                                <th className="cursor-pointer hover:bg-base-300 select-none" onClick={() => handleSort('createAt')}>
                                    Ngày tạo {renderSortIcon('createAt')}
                                </th>
                                <th className="text-center select-none">Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id} className="hover">
                                        <td className="font-semibold text-xs text-base-content/60">{user.id}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold text-sm">{user.name}</div>
                                                    <div className="text-xs opacity-60">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.role === 'admin' ? (
                                                <span className="badge badge-error badge-sm gap-1 font-semibold text-white">
                                                    <Shield className="w-3 h-3"/> Admin
                                                </span>
                                            ) : (
                                                <span className="badge badge-ghost badge-sm font-medium">User</span>
                                            )}
                                        </td>
                                        <td>
                                            {user.status === 1 && (
                                                <span className="badge badge-success badge-outline badge-sm font-semibold gap-1">
                                                    <Check className="w-3 h-3"/> Hoạt động
                                                </span>
                                            )}
                                            {user.status === 0 && (
                                                <span className="badge badge-error badge-outline badge-sm font-semibold gap-1">
                                                    <X className="w-3 h-3"/> Bị khóa
                                                </span>
                                            )}
                                            {user.status === -1 && (
                                                <span className="badge badge-warning badge-outline badge-sm font-semibold">
                                                    Chờ duyệt
                                                </span>
                                            )}
                                        </td>
                                        <td className="text-xs text-base-content/70">
                                            {user?.createAt ? new Date(user.createAt).toLocaleDateString('vi-VN') : '---'}
                                        </td>
                                        <td className="text-center">
                                            <div className="flex justify-center gap-1">
                                                <button className="btn btn-ghost btn-xs text-info tooltip" data-tip="Sửa">
                                                    <Edit2 className="w-3.5 h-3.5"/>
                                                </button>
                                                <button className="btn btn-ghost btn-xs text-error tooltip" data-tip="Xóa">
                                                    <Trash2 className="w-3.5 h-3.5"/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-8 text-base-content/50 italic text-sm">
                                        Không tìm thấy thành viên phù hợp.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* THANH PHÂN TRANG ĐỘNG HỢP NHẤT (PAGINATION) */}
                    {paginationInfo.totalPages > 1 && (
                        <div className="flex justify-end mt-4">
                            <div className="join">
                                <button
                                    className={`join-item btn btn-xs btn-outline ${pageable.page === 1 ? 'btn-disabled' : ''}`}
                                    onClick={() => changePage(pageable.page - 1)}
                                >
                                    «
                                </button>

                                {/* Hiển thị vị trí trang hiện tại trực quan */}
                                <button className="join-item btn btn-xs btn-active pointer-events-none">
                                    Trang {pageable.page} / {paginationInfo.totalPages}
                                </button>

                                <button
                                    className={`join-item btn btn-xs btn-outline ${pageable.page === paginationInfo.totalPages ? 'btn-disabled' : ''}`}
                                    onClick={() => changePage(pageable.page + 1)}
                                >
                                    »
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}