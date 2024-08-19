let theH1 = document.getElementById("theTieuDe");
console.log(theH1);
theH1.innerHTML = "Tôi tên là Quang Khải";
theH1.style.backgroundColor = "red";
theH1.style.setProperty("font-size", "60px");

let theHinhAnh = document.getElementById("hinhAnh");
theHinhAnh.src =
  "https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg";
// chiều dài = 1000px
// theHinhAnh.width = 1000;
theHinhAnh.style.setProperty("width", "1000px");

// Thực hiện truy xuất và lưu trữ một số giá trị từ thẻ html
// Khi sử dụng querySelector nhớ lưu ý là các selector được truyền vào phải xử lí để tương tác với đúng 1 thẻ duy nhất cần chỉnh sửa
document.querySelector("p").innerHTML = "Phong Vip Pro";
