'use client';

import React, {useState} from 'react';
import {Check, Edit2, Search, Shield, Trash2, UserPlus, X} from 'lucide-react';

// Giả lập dữ liệu danh sách người dùng từ Database
const initialUsers = [
    {
        id: 1,
        name: 'Nguyễn Văn Admin',
        email: 'admin@system.com',
        role: 'admin',
        status: 'active',
        createdAt: '2026-01-15'
    },
    {
        id: 2,
        name: 'Trần Thị Thu Hà',
        email: 'ha.tran@gmail.com',
        role: 'user',
        status: 'active',
        createdAt: '2026-03-22'
    },
    {
        id: 3,
        name: 'Vũ Hoàng Long',
        email: 'longvh@yahoo.com',
        role: 'user',
        status: 'suspended',
        createdAt: '2026-05-10'
    },
    {
        id: 4,
        name: 'Lê Minh Triết',
        email: 'trietlm@outlook.com',
        role: 'user',
        status: 'active',
        createdAt: '2026-06-01'
    },
    {id: 5, name: 'Phạm Bảo Ngọc', email: 'ngocpb@gmail.com', role: 'user', status: 'pending', createdAt: '2026-07-02'},
];

export default function UserListPage() {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh sách theo từ khóa tìm kiếm (Tên hoặc Email)
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">

            {/* Thẻ Thống Kê Tổng Quan Nhanh (Stats Card) */}
            <div className="stats shadow w-full bg-base-100 border border-base-300">
                <div className="stat">
                    <div className="stat-title text-sm">Tổng thành viên</div>
                    <div className="stat-value text-primary text-3xl">{users.length}</div>
                    <div className="stat-desc text-xs mt-1">Tài khoản đã đăng ký hệ thống</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-sm">Đang hoạt động</div>
                    <div className="stat-value text-success text-3xl">
                        {users.filter(u => u.status === 'active').length}
                    </div>
                    <div className="stat-desc text-xs mt-1">Tài khoản không bị khóa</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-sm">Chờ xác minh</div>
                    <div className="stat-value text-warning text-3xl">
                        {users.filter(u => u.status === 'pending').length}
                    </div>
                    <div className="stat-desc text-xs mt-1">Cần phê duyệt đăng ký</div>
                </div>
            </div>

            {/* Khu vực quản lý và Bộ lọc Table */}
            <div className="card w-full bg-base-100 border border-base-300 shadow-md">
                <div className="card-body p-4 sm:p-6">

                    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
                        <h3 className="font-bold text-xl text-base-content flex items-center gap-2">
                            Danh Sách Tài Khoản
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
                                <th>ID</th>
                                <th>Người dùng</th>
                                <th>Vai trò</th>
                                <th>Trạng thái</th>
                                <th>Ngày tạo</th>
                                <th className="text-center">Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
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
                                                <span
                                                    className="badge badge-error badge-sm gap-1 font-semibold text-white">
                            <Shield className="w-3 h-3"/> Admin
                          </span>
                                            ) : (
                                                <span className="badge badge-ghost badge-sm font-medium">User</span>
                                            )}
                                        </td>
                                        <td>
                                            {user.status === 'active' && (
                                                <span
                                                    className="badge badge-success badge-outline badge-sm font-semibold gap-1">
                            <Check className="w-3 h-3"/> Hoạt động
                          </span>
                                            )}
                                            {user.status === 'suspended' && (
                                                <span
                                                    className="badge badge-error badge-outline badge-sm font-semibold gap-1">
                            <X className="w-3 h-3"/> Bị khóa
                          </span>
                                            )}
                                            {user.status === 'pending' && (
                                                <span
                                                    className="badge badge-warning badge-outline badge-sm font-semibold">
                            Chờ duyệt
                          </span>
                                            )}
                                        </td>
                                        <td className="text-xs text-base-content/70">{user.createdAt}</td>
                                        <td className="text-center">
                                            <div className="flex justify-center gap-1">
                                                <button className="btn btn-ghost btn-xs text-info tooltip"
                                                        data-tip="Sửa">
                                                    <Edit2 className="w-3.5 h-3.5"/>
                                                </button>
                                                <button className="btn btn-ghost btn-xs text-error tooltip"
                                                        data-tip="Xóa">
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

                    {/* Thanh phân trang dưới chân bảng */}
                    <div className="flex justify-end mt-4">
                        <div className="join">
                            <button className="join-item btn btn-xs btn-outline">«</button>
                            <button className="join-item btn btn-xs btn-active">1</button>
                            <button className="join-item btn btn-xs btn-outline">2</button>
                            <button className="join-item btn btn-xs btn-outline">»</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}