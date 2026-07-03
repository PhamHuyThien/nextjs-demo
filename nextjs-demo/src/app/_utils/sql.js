import {asc, desc} from "drizzle-orm";

export function buildPageable(pageable) {
    if (!pageable || typeof pageable !== "object") {
        pageable = {};
    }
    if (!pageable.pageSize || typeof pageable.pageSize !== 'number' || pageable.pageSize < 0) {
        pageable.pageSize = 10;
    }
    if (!pageable.page || typeof pageable.page !== 'number' || pageable.page < 1) {
        pageable.page = 1;
    }
    if (!pageable.order || typeof pageable.order !== 'string' || (pageable.order !== 'desc' && pageable.order !== 'asc')) {
        pageable.order = 'desc';
    }
    if (!pageable.orderBy || typeof pageable.orderBy !== 'string') {
        pageable.orderBy = 'id';
    }
    pageable.exts = {
        offset: (pageable.page - 1) * pageable.pageSize
    }
    return pageable;
}

export function buildDrizzleOrderBy(schema, pageable = buildPageable()) {
    const schemaKey = schema[pageable.orderBy];
    if (!schemaKey) throw new Error("Missing schema key");
    return pageable.order === 'desc'
        ? desc(schemaKey)
        : asc(schemaKey);
}