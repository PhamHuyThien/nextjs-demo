import RequiredOut from "@/app/(clients)/_components/required-logout";

export const metadata = {
    title: 'Đăng nhập | Đăng ký',
    description: 'Next.js App với Toast và Context',
};

// src/app/(auth)/layout.jsx
export default function AuthLayout({ children }) {
    return (
        <RequiredOut>
            <div
                className="min-h-screen bg-gradient-to-br from-primary/20 to-base-300 flex items-center justify-center">
                {/* Bao quanh các trang login/register bằng một khung thiết kế riêng */}
                <div className="w-full max-w-6xl p-4">
                    {children}
                </div>
            </div>
        </RequiredOut>
    );
}