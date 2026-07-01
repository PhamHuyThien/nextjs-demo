import {drizzle} from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

// Tạo cơ chế Singleton để không bị tạo lại nhiều connection khi Next.js hot-reload
const globalForDb = globalThis;

if (!globalForDb.mysqlConnection) {
    globalForDb.mysqlConnection = mysql.createPool(process.env.DATABASE_URL);
}

export const db = drizzle(globalForDb.mysqlConnection);