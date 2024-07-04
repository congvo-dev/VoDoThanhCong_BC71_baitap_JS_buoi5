function Tinh() {
    var diemChuan = document.getElementById("diem_chuan").value*1;
    var diem1 = document.getElementById("diem_1").value*1;
    var diem2 = document.getElementById("diem_2").value*1;
    var diem3 = document.getElementById("diem_3").value*1;
    var diem3mon = diem1 + diem2 + diem3 ;
    console.log(diem3mon);
    var diemKhuVuc = document.getElementById("khu_vuc").value*1;
    var diemDoiTuong = document.getElementById("doi_tuong").value*1;
    console.log(diemKhuVuc,diemDoiTuong);
    diemTong = diem3mon + diemKhuVuc + diemDoiTuong;
    console.log("🚀 ~ Tinh ~ diemTong:", diemTong);
    var ketQua = "";
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        ketQua = "Rớt";
        document.getElementById("ket_qua").innerHTML = `Tổng điểm: ${diemTong}, Kết quả: ${ketQua}`;
    } else if (diemTong >= diemChuan) {
        ketQua = "Đậu";
        document.getElementById("ket_qua").innerHTML = `Tổng điểm: ${diemTong}, Kết quả: ${ketQua}`;
    } else {
        ketQua = "Rớt";
        document.getElementById("ket_qua").innerHTML = `Tổng điểm: ${diemTong}, Kết quả: ${ketQua}`;
    }

}