import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const path = req.nextUrl.pathname;

        // Nếu cố vào trang admin mà role không phải là admin -> redirect về trang login
        if (path.startsWith("/admin") && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    },
    {
        callbacks: {
            // Middleware này chỉ chạy nếu hàm authorized trả về true (tức là đã đăng nhập)
            authorized: ({ token }) => !!token,
        },
    }
);

// Danh sách các thư mục cần được kích hoạt Middleware bảo vệ
export const config = {
    matcher: ["/admin/:path*", "/user/:path*"],
};