function An() {
    var x = document.getElementById("loai_khach").value;
    console.log("🚀 ~ An ~ x:", x)
    if (x == "doanh_nghiep") {
        document.getElementById("so_ket_noi").style.display = "block";
    } else {
        document.getElementById("so_ket_noi").style.display = "none";
    }
}

function tinhTienCap() {
    var maKhachHang = document.getElementById("ma_khach_hang").value;
    var soKenhCaoCap = document.getElementById("so_kenh_cao_cap").value*1;
    console.log("🚀 ~ tinhTienCap ~ soKenhCaoCap:", soKenhCaoCap);
    var soKetNoi = document.getElementById("so_ket_noi").value*1;
    console.log("🚀 ~ tinhTienCap ~ soKetNoi:", soKetNoi);
    var tienCap = null;
    var x = document.getElementById("loai_khach").value;
    console.log("🚀 ~ tinhTienCap ~ x:", x)
    if (x == "nha_dan") {
        tienCap = 4.5 + 20.5 + soKenhCaoCap*7.5;
        console.log("🚀 ~ tinhTienCap ~ tienCap:", tienCap)
    } else {
        var phiDichVu = null;
        if (soKetNoi <=10) {
            phiDichVu = 75;
        } else {
            phiDichVu = 75 + (soKetNoi-10)*5;
        }
        tienCap = 15 + phiDichVu + soKenhCaoCap*50;
    }
    console.log("TienCap:",tienCap);
    document.getElementById("result").innerHTML = `Khách hàng: ${maKhachHang}, tiền cáp: $ ${tienCap}`
}