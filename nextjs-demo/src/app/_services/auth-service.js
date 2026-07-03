import "server-only";

import {TTResp} from "@/app/_utils/http";
import {db} from "@/app/_databases/";
import {users} from "@/app/_databases/schema";
import {eq} from "drizzle-orm";
import {userSelect} from "@/app/_databases/select";

export async function getUser(ctx) {
    if (!ctx?.user) return TTResp.unauthorized();
    const [user] = await db.select(userSelect).from(users).where(eq(users.email, ctx?.user?.email)).limit(1);
    if (!user) return TTResp.unauthorized(undefined, 'Tài khoản không tồn tại');
    if (user.status !== 1) return TTResp.unauthorized(undefined, 'Tài khoản đã bị khoá');
    return TTResp.success(user);
}

export async function register(ctx, email, password, name, isTerm) {
    if (!email || !password || !name || !isTerm) {
        return TTResp.valid();
    }
    email = email.toLowerCase();
    let userExists = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (userExists.length) {
        return TTResp.error('Email đã tồn tại');
    }
    let [result] = await db.insert(users).values({name, email, password, role: 'user'});
    return TTResp.success({insertId: result.insertId, affectedRows: result.affectedRows});
}