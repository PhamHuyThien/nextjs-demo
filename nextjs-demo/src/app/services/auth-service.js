"use server"
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/auth";
import {DataRes} from "@/app/utils/http-utils";
import {db} from "@/db";
import {users} from "@/db/schema";
import {eq} from "drizzle-orm"; // Trỏ đúng về file chứa authOptions v4 của bạn

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getUser() {
    const session = await getSession();
    return session?.user;
}

export async function login(email, password) {

}

export async function register(email, password, name, isTerm) {
    if (!email || !password || !name || !isTerm) {
        return DataRes.valid();
    }
    email = email.toLowerCase();
    let userExists = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (userExists.length) {
        return DataRes.error('Email đã tồn tại');
    }
    let [result] = await db.insert(users).values({name, email, password, role: 'user'});
    return DataRes.success(result);
}