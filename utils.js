// File này lưu giữ các tiện ích bổ sung khi cần xử lý (ví dụ: định dạng tiền tệ hoặc xử lý LocalStorage nếu phát triển giỏ hàng)
const utils = {
    formatCurrency: (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
};
