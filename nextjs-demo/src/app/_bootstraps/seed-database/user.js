import "server-only";
import {db} from "@/app/_databases";
import {users} from "@/app/_databases/schema";
import {count} from "drizzle-orm";
import logger from "@/app/_utils/logger";

export async function user() {
    let [{total}] = await db.select({total: count()}).from(users).limit(1);
    if (total) return;
    const {default: userSeedData} = await import("./data/user.json");
    await db.insert(users).values(userSeedData);
    logger.info(`seed user success ${userSeedData.length} records.`);
}