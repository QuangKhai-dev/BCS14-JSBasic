// true (đúng)
// false (sai)

let diemThiCuaLam = 9;
let diemThiCuaPhong = 7;

// Toán tử so sánh bằng (==) : So sánh giá trị
let ketQua = diemThiCuaLam == diemThiCuaPhong; // true - false
console.log(ketQua);
console.log(9 == "9"); // true
// Toán tử so sánh khác (!=) : khác giá trị
console.log(diemThiCuaLam != diemThiCuaPhong);

// Toán tử so sánh bằng giá trị và kiểu (===)

console.log(9 === "9");
console.log(10 === 10);

// Toán sử so sánh khác giá trị hoặc kiểu dữ liệu
let tenVinh = "Vinh Lâm";
let tenLong = "Long Rồng";

console.log(tenVinh !== tenLong);

// !true ==> false
// !false ==> true

// Long thi được 3 môn Toán 8 , Lý 5, Hoá 7
// Toán > 7 , Lý >= 5, Hoá > 8
let diemToanLong = 9;
let diemLyLong = 5;
let diemHoaLong = 9;
let ketQua2 =
  diemToanLong > 7 &&
  console.log("Heloo tôi không được chạy") &&
  diemLyLong >= 5 &&
  diemHoaLong > 8; // false
console.log(ketQua2);

// Một cửa hàng tạo ra chương trình khuyến mãi, nếu khách hàng mua hàng với hoá đơn trên 5000000 hoặc khách hàng mua 10 sản phẩm từ cửa hàng thì sẽ giảm giá 30%
let tongTienHang = 4000000;
let soLuongSanPham = 10;
let ketQua3 = tongTienHang > 5000000 || soLuongSanPham > 10; // true // false
console.log(ketQua3);

// Cấu trúc điều kiện if
let tongDiemThi = 33;
// THPT Nguyễn Thị Thập
if (tongDiemThi > 35) {
  // Thực thi những hành động khi điều kiện đúng
  console.log("Chúc mừng sinh viên đã đậu THPT");
} else {
  // else sẽ thực thi các hành động bên trong khi điều kiện của if trả về kết quả false
  // sẽ là nơi xử lí tất cả trường hợp không lớn hơn 35 (< 35 =35)
  console.log("Chia buồn bạn đã rớt THPT");
}

// Một công ty C yêu cầu một chức năng cho giao diện quản trị, yêu cầu là sẽ thực hiện tính toán tiền lương cho nhân viên trong công ty, tiền lương cố định mỗi giờ làm sẽ là 200000. Nếu nhân viên làm trên 100 tiếng thì tiền lương sẽ được nhân hệ số 1.5 . vd nhân viên làm 120 tiếng thì 100 tiếng đầu sẽ tính bình thường còn 20 tiếng còn lại sẽ được nhân với 1.5 . Bên công ty yêu cầu nếu kiểm tra chức vụ của người đang cần tính lương là giám đốc thì hệ số lương x3 còn nếu trưởng phòng thì k cần
// tongTienLuong = 100 * 200000 + 200000 * 1.5 * 50 ==> (100 * 200000 + 200000 * 1.5 * 50) * 3
// Sau khi có kết quả, sẽ thực hiện đưa dữ liệu tính toán lên giao diện và chuyển đổi thành kiểu dữ liệu tiền tệ
// 30.000.000vnd

// Tạo một sự kiện click dành cho nút button tính lương
document.querySelector(".btn-dark").onclick = function () {
  let soGioLam = document.getElementById("soGioLam").value;
  console.log(soGioLam);
  let chucVu = document.getElementById("chucVu").value;
  console.log(chucVu);

  // 0 --> 100 ==> soGioLam * 200000

  // 80 = 80 * 200000
  // 180 = 100 * 200000 + (soGioLam - 100) * 200000 * 1.5
  let tongTien = 0;
  if (soGioLam > 100) {
    // 105
    tongTien = 100 * 200000 + (soGioLam - 100) * 200000 * 1.5;
  } else {
    tongTien = soGioLam * 200000;
  }
  console.log(tongTien);
  if (chucVu == "GD") {
    tongTien *= 3;
  }
  // 35000000 : Số tiền lương của người dùng với chức vụ ... là : ...... vnd
  document.getElementById(
    "ketQua"
  ).innerHTML = `Số tiền lương của người dùng với chức vụ ${chucVu} là ${tongTien.toLocaleString(
    "it-IT",
    { style: "currency", currency: "VND" }
  )}`;
};

// Tương tác tạo sự kiện
// Lấy dữ liệu từ người dùng
// Phân tích yêu cầu đề và tạo các bước xử lí
// Đưa kết quả lên giao diện
