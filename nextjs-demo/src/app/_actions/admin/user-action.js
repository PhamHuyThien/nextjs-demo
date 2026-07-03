"use server"

import * as UserService from "@/app/_services/user-service";
import {response, middlewares, pageable, withRole} from "@/app/_middlewares/middleware";
import {ROLE_ADMIN} from "@/app/_constants/app-constant";

export const adminGetDashboard = middlewares(response(), withRole([ROLE_ADMIN]), UserService.getDashboardInfo);
export const adminGetUserList = middlewares(response(), withRole([ROLE_ADMIN]), pageable(), UserService.getUserList);