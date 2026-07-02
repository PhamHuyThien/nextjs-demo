import "server-only";

import {getSession} from "@/auth";
import {SimpleResp} from "@/app/_utils/http";


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
            return SimpleResp.unauthorized();
        }
        if (roles.length > 0 && !roles.includes(session.user.role)) {
            return SimpleResp.forbidden();
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
            return SimpleResp.unauthorized();
        }
        ctx.session = session;
        ctx.user = session.user;
        return next();
    };
}