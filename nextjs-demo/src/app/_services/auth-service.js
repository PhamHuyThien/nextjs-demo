import "server-only";

import {SimpleResp} from "@/app/_utils/http";
import {db} from "@/app/_databases/";
import {users} from "@/app/_databases/schema";
import {eq} from "drizzle-orm";


export async function getUser(ctx) {
    if (ctx?.user) return SimpleResp.unauthorized();
    const newUser = db.select().from(users).where(eq(users.email, ctx?.user?.email)).limit(1);
    if (!newUser.length) return SimpleResp.unauthorized(undefined, 'Tài khoản không tồn tại');
    return SimpleResp.success(newUser[0]);
}

export async function register(ctx, email, password, name, isTerm) {
    if (!email || !password || !name || !isTerm) {
        return SimpleResp.valid();
    }
    email = email.toLowerCase();
    let userExists = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (userExists.length) {
        return SimpleResp.error('Email đã tồn tại');
    }
    let [result] = await db.insert(users).values({name, email, password, role: 'user'});
    return SimpleResp.success({insertId: result.insertId, affectedRows: result.affectedRows});
}