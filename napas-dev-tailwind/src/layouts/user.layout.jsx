import { Link, Outlet } from 'react-router'

export default function UserLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* Navbar riêng của User */}
            <nav className="bg-blue-600 p-4 text-white flex gap-4 shadow">
                <Link to="/" className="font-bold">User Portal</Link>
                <Link to="/profile">Hồ sơ cá nhân</Link>
                <Link to="/admin/dashboard" className="ml-auto text-yellow-300">Vào Admin ➔</Link>
            </nav>

            {/* Nội dung trang con của User sẽ hiện ở đây */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

            {/* Footer riêng của User */}
            <footer className="bg-slate-800 text-gray-400 p-4 text-center text-sm">
                © 2026 Giao diện dành cho Người Dùng
            </footer>
        </div>
    )
}