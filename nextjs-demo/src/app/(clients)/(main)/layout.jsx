import Header from "./_components/header";

export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-base-200">
            {/* Header được tách thành component riêng để dễ quản lý */}
            <Header />

            {/* Nội dung thay đổi theo từng trang */}
            <main className="flex-grow max-w-7xl w-full mx-auto p-4 md:p-6">
                {children}
            </main>

            {/* Footer chân trang */}
            <footer className="footer footer-center p-4 bg-base-300 text-base-content border-t border-base-100">
                <aside>
                    <p>Copyright © 2026 - All rights reserved by My App</p>
                </aside>
            </footer>
        </div>
    );
}