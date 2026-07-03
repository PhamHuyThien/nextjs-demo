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
                    const [user] = await db.select().from(users)
                        .where(eq(users.email, credentials.email))
                        .limit(1);
                    if (user && user.status === 1 && user.password === credentials.password) {
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
        async jwt({token, user}) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}) {
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {signIn: "/login"},
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET,
};

export const getSession = async () => await getServerSession(authOptions);

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };