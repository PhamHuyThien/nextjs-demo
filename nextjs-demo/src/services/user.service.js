"use server"
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/auth"; // Trỏ đúng về file chứa authOptions v4 của bạn

export async function getSession() {
    const session = getServerSession(authOptions);
    if (!session) throw new Error("Session not found");
    return session;
}

export async function getUser() {
    const ss = await getSession();
    console.log(ss)
    // return ss.user;
}
