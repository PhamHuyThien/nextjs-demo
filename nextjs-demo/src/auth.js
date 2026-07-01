import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;


                const u  ={user: 'thien', password: '123', role: 'admin', email: 'thien@gmail.com'};
                try {
                    // Lấy user từ database bằng Drizzle
                    // const res = await db.select().from(users).where(eq(users.email, credentials.email)).limit(1);
                    // const user = res[0];
                    //
                    // Kiểm tra password (Demo so sánh trực tiếp, thực tế nên dùng bcrypt để so sánh)
                    // if (user && user.password === credentials.password) {
                    if (credentials.email === u.user && u.password === credentials.password) {
                        return u;
                    }
                } catch (error) {
                    console.error("Auth Error:", error);
                    return null;
                }
                return null;
            }
        })
    ],
    callbacks: {
        // 1. Lưu role vào JWT Token sau khi authorize thành công
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        // 2. Trả role từ Token về Session để Client/Server lấy được
        async session({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login", // Trang đăng nhập custom của bạn
    },
    session: {
        strategy: "jwt", // Bắt buộc dùng chiến lược JWT cho Credentials Provider
    },
    secret: process.env.NEXTAUTH_SECRET, // Biến môi trường secret trong v4
};

const handler = NextAuth(authOptions);

// NextAuth v4 yêu cầu export các method dưới dạng này trong App Router
export { handler as GET, handler as POST };