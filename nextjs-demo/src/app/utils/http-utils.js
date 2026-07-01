export const DataRes = {
    valid(message = "Trường dữ liệu không hợp lệ", data = null, code = -1) {
        return {code, message, data};
    },
    success(data = null, message = "Thành công", code = 200) {
        return {code, message, data};
    },
    error(message = "Có lỗi xảy ra, vui lòng thử lại sau", data = null, code = 400) {
        return {code, message, data};
    }
}