import "server-only";
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import logger from "@/app/_utils/logger";
import {db} from "@/app/_databases";
import {userSelect} from "@/app/_databases/select";
import {users} from "@/app/_databases/schema";
import {eq} from "drizzle-orm";


export async function bootstrap() {

    const app = express();
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: "*",
        }
    });

    io.on('connection', (socket) => {
        logger.info(`🔌 Có người kết nối: ${socket.id}`);

        socket.on('message', async (data) => {
            logger.info(`Tin nhắn nhận được từ ${socket.id}: ${data}`);
            const [user] = await db.select(userSelect).from(users).where(eq(users.id, data)).limit(1);
            io.emit('nhận-tin-nhắn', {
                sender: socket.id,
                message: JSON.stringify(user),
            });
        });

        socket.on('disconnect', () => {
            logger.info(`❌ Người dùng đã ngắt kết nối: ${socket.id}`);
        });
    });

    const SOCKET_PORT = 3001;
    server.listen(SOCKET_PORT, () => {
        logger.info(`🚀 Server Socket.io đang chạy tại http://localhost:${SOCKET_PORT}`);
    });
}
