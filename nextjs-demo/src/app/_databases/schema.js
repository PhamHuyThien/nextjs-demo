import {int, mysqlTable, timestamp, varchar} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(), // Trong thực tế nên hash password
    role: varchar("role", { length: 50 }).default("user").notNull(), // 'user' hoặc 'admin'
    status: int("status").default(1).notNull(),
    amount: int("amount").default(0).notNull(),
    createAt: timestamp("create_at").notNull().defaultNow(),
    updateAt: timestamp("update_at").default(null),
});