"use server"

import {middlewares, withAuth} from "@/app/_middlewares/middleware";
import * as AuthService from "@/app/_services/auth-service";

export const getUser = middlewares(withAuth(), AuthService.getUser);
export const register = middlewares(AuthService.register);