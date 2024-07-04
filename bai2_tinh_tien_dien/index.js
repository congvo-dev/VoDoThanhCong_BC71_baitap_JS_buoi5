function tinhTienDien() {
    var ten = document.getElementById("ten").value;
    var soKW = document.getElementById("so_KW").value*1;
    var tienTra = null;
    if (soKW <= 50) {
        tienTra = soKW * 500;
    } else if (50 < soKW && soKW <= 100) {
        tienTra = 50 * 500 + (soKW - 50) * 650;
    } else if (100 < soKW && soKW <= 200) {
        tienTra = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (200 < soKW && soKW <= 350) {
        tienTra = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100; 
    } else if (soKW > 350) {
        tienTra = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    document.getElementById("result").innerHTML = `Tên: ${ten}, số tiền điện: ${tienTra.toLocaleString()}d`;
}