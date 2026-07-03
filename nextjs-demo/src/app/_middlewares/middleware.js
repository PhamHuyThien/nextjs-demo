import "server-only";

import {getSession} from "@/auth";
import {TTResp} from "@/app/_utils/http";
import {buildPageable} from "@/app/_utils/sql";
import {subMax} from "@/app/_utils/string";


export function middlewares(...stack) {
    return async (...args) => {
        const ctx = {};
        let index = -1;

        async function dispatch(i) {
            if (i <= index) {
                throw new Error("next() called multiple times");
            }
            index = i;
            const fn = stack[i];
            if (!fn) return;
            const isLast = i === stack.length - 1;
            if (isLast) {
                return fn(ctx, ...args);
            }
            return fn(ctx, args, () => dispatch(i + 1));
        }

        return dispatch(0);
    };
}


export function withRole(roles = []) {
    return async (ctx, args, next) => {
        const session = await getSession();
        if (!session?.user) {
            return TTResp.unauthorized();
        }
        if (roles.length > 0 && !roles.includes(session.user.role)) {
            return TTResp.forbidden();
        }
        ctx.session = session;
        ctx.user = session.user;
        return next();
    };
}

export function withAuth() {
    return async (ctx, args, next) => {
        const session = await getSession();
        if (!session?.user) {
            return TTResp.unauthorized();
        }
        ctx.session = session;
        ctx.user = session.user;
        return next();
    };
}

export function pageable() {
    return async (ctx, args, next) => {
        const startTime = Date.now();
        let defaultPageable = {};
        if (args && Array.isArray(args)
            && args.length > 0
            && typeof args[args.length - 1] === "object") {
            const {page, pageSize, order, orderBy} = args[args.length - 1];
            defaultPageable = {page, pageSize, order, orderBy};
        }
        ctx.pageable = buildPageable(defaultPageable);
        const ms = Date.now() - startTime;
        console.log(`  ┌─ ƒ pageable() - ${subMax(ctx.pageable)} in ${ms}ms`);
        return next();
    };
}

export function response(maxText = 100) {
    return async (ctx, args, next) => {
        try {
            const startTime = Date.now();
            const response = await next();
            const ms = Date.now() - startTime;
            console.log(`  ┌─ ƒ response() - ${subMax(response, maxText)} in ${ms}ms`);
            return response;
        } catch (error) {
            throw error;
        }
    };
}