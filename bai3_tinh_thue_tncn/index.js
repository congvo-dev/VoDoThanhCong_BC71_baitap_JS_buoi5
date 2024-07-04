function tinhThue() {
    var Ten = document.getElementById("ten").value;
    var thuNhap = document.getElementById("thunhap").value*1;
    console.log("🚀 ~ tinhThue ~ thuNhap:", thuNhap);
    var nguoi = document.getElementById("nguoi").value*1;
    console.log("🚀 ~ tinhThue ~ nguoi:", nguoi);
    var tnTam = thuNhap - 4e+6 - nguoi*1.6e+6;
    console.log("🚀 ~ tinhThue ~ tnTam:", tnTam);
    var tienThue = null;
    if (tnTam <=60e+6) {
        tienThue = tnTam * 0.05;
    } else if (60e+6 < tnTam && tnTam<= 120e+6) {
        tienThue = 60e+6*0.05 + (tnTam - 60e+6)*0.1;
    } else if (120e+6 < tnTam && tnTam <= 210e+6) {
        tienThue = 60e+6*0.05 + 60e+6*0.1 + (tnTam - 120e+6)*0.15;
    } else if (210e+6 < tnTam && tnTam <= 384e+6) {
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + (tnTam - 210e+6)*0.2;
    } else if (384e+6 < tnTam && tnTam <= 624e+6) {
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + 174e+6*0.2 + (tnTam - 384e+6)*0.25;
    } else if (624e+6 < tnTam && tnTam <= 960e+6) {
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + 174e+6*0.2 + 240e+6*0.25 + (tnTam - 624e+6)*0.3;
    } else if (960e+6 < tnTam) {
        tienThue = 60e+6*0.05 + 60e+6*0.1 + 90e+6*0.15 + 174e+6*0.2 + 240e+6*0.25 + 336e+6*0.3 + (tnTam - 960e+6)*0.35;
    }
    document.getElementById("result").innerHTML = `Tên: ${Ten}, thuế phải nộp: ${tienThue.toLocaleString()}`;
}