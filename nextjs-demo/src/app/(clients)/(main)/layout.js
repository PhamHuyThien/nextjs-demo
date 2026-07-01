// src/app/(main)/layout.jsx
export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header dùng chung cho trang chủ, không liên quan đến bọn login */}
            <header className="navbar bg-base-100 shadow">
                <a className="btn btn-ghost text-xl">My App Logo</a>
            </header>

            {/* Nội dung thay đổi theo từng trang (ví dụ: Trang chủ, Trang liên hệ...) */}
            <main className="flex-grow p-6">
                {children}
            </main>

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside><p>Copyright © 2026 - All rights reserved</p></aside>
            </footer>
        </div>
    );
}