import "server-only";
import {user} from "@/app/_bootstraps/seed-database/user";

export async function bootstrap() {
    await user();
}