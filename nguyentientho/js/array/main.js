// Đây là giá trị khởi tạo của chúng ta
const giaTriKhoiTao = 0;

// Mảng số
const mangSo = [5, 10, 15];

// Tạo hàm tính tổng. Hành động này lát nữa sẽ
// áp dụng lên trên mảng (hàm này sẽ được gọi lại)
const tinhTong = (boTichLuy, phanTuHienTai) => {
    console.log('Bộ tích lũy: ' + boTichLuy);
    console.log('Phần tử hiện: ' + boTichLuy);
    console.log('--------------------------');
    return boTichLuy + phanTuHienTai;
};

// Sử dụng reduce()
const tong = mangSo.reduce(tinhTong, giaTriKhoiTao);
console.log(tong);