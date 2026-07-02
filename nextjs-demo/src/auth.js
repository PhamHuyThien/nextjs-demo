import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {db} from "@/app/_databases";
import {users} from "@/app/_databases/schema";
import {eq} from "drizzle-orm";
import logger from "@/app/_utils/logger";
import {getServerSession} from "next-auth/next";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                try {
                    const res = await db.select().from(users)
                        .where(eq(users.email, credentials.email))
                        .limit(1);
                    const user = res?.[0];
                    if (user && user.password === credentials.password) {
                        return {name: user.name, email: user.email, role: user.role, createAt: user.createAt};
                    }
                } catch (error) {
                    logger.error("Error while authorizing", error);
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

export const getSession = async () => await getServerSession(authOptions);

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };