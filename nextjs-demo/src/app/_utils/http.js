import "server-only";

export const TTResp = {
    valid(message = "Trường dữ liệu không hợp lệ", data = null, code = -1) {
        return {code, message, data};
    },
    success(data = null, message = "Thành công", code = 200) {
        return {code, message, data};
    },
    error(message = "Có lỗi xảy ra, vui lòng thử lại sau", data = null, code = 400) {
        return {code, message, data};
    },
    unauthorized(data = null, message = "Bạn chưa đăng nhập", code = 401) {
        return {code, message, data};
    },
    forbidden(data = null, message = "Bạn không có quyền truy cập", code = 403) {
        return {code, message, data};
    },
    list(pageable, rows, total) {
        const {pageSize} = pageable;
        const totalRecords = total || rows.length;
        const totalPages = Math.ceil(totalRecords / pageSize);
        return {
            data: rows,
            pagination: {
                ...pageable,
                totalRecords,
                totalPages,
            }
        }
    }
}