import { Link, Outlet } from 'react-router'

export default function AdminLayout() {
    return (
        <div className="min-h-screen flex bg-zinc-900 text-zinc-100">
            {/* Sidebar bên trái riêng của Admin */}
            <aside className="w-64 bg-zinc-800 p-4 flex flex-col gap-4 border-r border-zinc-700">
                <div className="font-bold text-xl text-red-500 p-2">ADMIN PANEL</div>
                <Link to="/admin/dashboard" className="hover:bg-zinc-700 p-2 rounded">📊 Dashboard</Link>
                <Link to="/admin/products" className="hover:bg-zinc-700 p-2 rounded">📦 Quản lý Sản phẩm</Link>
                <Link to="/admin/products/create" className="text-sm pl-6 hover:text-red-400">└─ Thêm sản phẩm</Link>
                <Link to="/" className="mt-auto text-sm text-zinc-400 hover:text-white">← Về Trang Chủ</Link>
            </aside>

            {/* Khối bên phải gồm Header + Nội dung */}
            <div className="flex-1 flex flex-col">
                {/* Header riêng của Admin */}
                <header className="bg-zinc-800 p-4 border-b border-zinc-700 flex justify-between items-center">
                    <span>Xin chào, Admin sếp tổng</span>
                    <button className="bg-red-600 px-3 py-1 rounded text-sm">Đăng xuất</button>
                </header>

                {/* Nội dung trang con của Admin (Children sâu) sẽ hiện ở đây */}
                <main className="flex-1 p-6 bg-zinc-950">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}