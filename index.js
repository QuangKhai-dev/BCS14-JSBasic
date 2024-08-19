console.log("Tôi là file js đầu tiên");
// console thông báo về lỗi
console.error("Lỗi đang có ở dòng số 2");
// console giúp cảnh báo
console.warn("Lưu ý cẩn thận bị lỗi");
// console giúp xoá tất cả các console ở phía trước
// console.clear();

// Biến và kiểu dữ liệu (Variable - type)
// camelCase
let noiDung = "Anh Đông Vip Pro";
// 3 biến giúp lưu trữ điểm của một sinh viên gồm toán lý hoá và tên sinh viên đó
let hoTen = "Đông Sun";
let diemToan = 6;
let diemLy = 8;
let diemHoa = 2;
console.log(diemHoa);
diemHoa = 7;
console.log(diemHoa);
// Sinh Viên Đông Sun thi toán được 6 điểm, thi lý được 8 điểm và thi hoá được 2 điểm
// "a" + " " + "b" ==> "ab"
// console.log("Sinh viên" + " " + hoTen);

// string template
console.log(`Sinh viên ${hoTen} thi toán được ${diemToan} điểm`);
console.log(typeof diemToan); // string | number

// Hằng số (constant)
const heSoLuong = 4;

let tong = diemHoa + diemLy + diemToan;
console.log(tong);

// Tính tổng ký số (432) ==> 4 + 3 + 2 = 9 (4.32) ==> Math.floor(4.32) ==> 4
let soCoBaChuSo = 432;
let soHangTram = Math.floor(soCoBaChuSo / 100);
let soHangChuc = Math.floor((soCoBaChuSo % 100) / 10);
let soHangDonVi = soCoBaChuSo % 10;
let tongBaKySo = soHangTram + soHangChuc + soHangDonVi;
console.log(tongBaKySo);

// Phép tăng
let diemSu = 7;
diemSu = 8;
diemSu++;
console.log(diemSu);
++diemSu;
console.log(diemSu);

let a = 9;
let b = 3;
let tongKetQua = a + b++ + ++a + b;
console.log(tongKetQua); // 9 + 3 + 10 + 4 ==> 26

// Phép giảm
diemSu--;
console.log(diemSu);

let diemSo = 3000;
// diemSo = diemSo + 500;
diemSo += 500;
console.log(diemSo);

let soChiaHetChoBa = 24;
// soChiaHetChoBa = soChiaHetChoBa / 3; // 8
soChiaHetChoBa /= 3;
console.log(soChiaHetChoBa);
