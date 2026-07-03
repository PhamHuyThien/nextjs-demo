import "server-only";
import {db} from "@/app/_databases";
import {users} from "@/app/_databases/schema";
import {like, or, sql} from "drizzle-orm";
import {buildDrizzleOrderBy} from "@/app/_utils/sql";
import {TTResp} from "@/app/_utils/http";
import {userSelect} from "@/app/_databases/select";

export async function getDashboardInfo(ctx) {
    const sql = `select count(*)                                      as total_users,
                        (select count(*) from users where status = 1) as active_users,
                        (select count(*) from users where status = 0) as inactive_users
                 from users`;
    const [[result]] = await db.execute(sql);
    return TTResp.success(result);
}

export async function getUserList(ctx, search) {
    let w = undefined;
    if (search) {
        w = or(
            like(users.name, `%${search}%`),
            like(users.email, `%${search}%`),
            like(users.role, `%${search}%`)
        );
    }
    const [rows, [{total}]] = await Promise.all([
        db.select(userSelect).from(users)
            .where(w)
            .orderBy(buildDrizzleOrderBy(users, ctx.pageable))
            .limit(ctx.pageable.pageSize)
            .offset(ctx.pageable.exts.offset),
        db.select({total: sql`count(*)`.mapWith(Number)})
            .from(users)
            .where(w)
    ]);
    return TTResp.success(TTResp.list(ctx.pageable, rows, total));
}