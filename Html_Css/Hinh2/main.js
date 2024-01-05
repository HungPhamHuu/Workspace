var ma_kh = document.getElementById("ma_kh");
ma_kh.addEventListener("change", function checkCustomer() {
    const custommers = [
        { ma_kh: "KH001", ten_kh: "Nguyễn Văn A", dia_chi: "Hà Nội" }
    ];

    const ma_kh_value = ma_kh.value;
    const selectCustomer = custommers.find(custommers => custommers.ma_kh === ma_kh_value);
    if (selectCustomer) {
        document.getElementById("ten_kh").value = selectCustomer.ten_kh;
        document.getElementById("dia_chi").value = selectCustomer.dia_chi;
    } else {
        alert("Mã khách hàng không tồn tại");
    }
});


var ma_nv = document.getElementById("ma_nv");
ma_nv.addEventListener("change", function checkStaff() {
    const staffs = [
        { ma_nv: "NV001", ten_nv: "Phạm Văn A" }
    ];

    const ma_nv_value = ma_nv.value;
    const selectStaff = staffs.find(staffs => staffs.ma_nv === ma_nv_value);
    if (selectStaff) {
        document.getElementById("ten_nv").value = selectStaff.ten_nv;
    } else {
        alert("Mã nhân viên không tồn tại");
    }
});

// function getProductByIMEI(imei_input){
//     const produts = [
//         {imei: "IP12PRX0001", gia: 12000000, ma_vt: "IP12PRX", ten_vt: "Iphone", dvt: "Chiếc", so_luong: 1, thue_suat: 10},
//         {imei: "IP12PRX0002", gia: 12000000, ma_vt: "IP12PRX", ten_vt: "Iphone", dvt: "Chiếc", so_luong: 1, thue_suat: 10}
//     ];
//     return produts.find(products => products.imei === imei_input);
// }

var imei = document.getElementById("imei");
imei.addEventListener("change", function checkImei() {
    const produts = [
        { imei: "IP12PRX0001", gia: 12000000, ma_vt: "IP12PRX1", ten_vt: "Iphone", dvt: "Chiếc", so_luong: 1, thue_suat: 10 },
        { imei: "IP12PRX0002", gia: 12000000, ma_vt: "IP12PRX2", ten_vt: "SamSung", dvt: "Chiếc", so_luong: 1, thue_suat: 10 }
    ];
    const imei_input = imei.value;
    const selectImei = produts.find(produts => produts.imei === imei_input);

    if (selectImei) {
        const tien_thue = gia * thue_suat;
        const tien = gia + tien_thue;

        document.getElementById("gia").textContent = selectImei.gia;
        document.getElementById("ma_vt").textContent = selectImei.ma_vt;
        document.getElementById("ten_vt").textContent = selectImei.ten_vt;
        document.getElementById("dvt").textContent = selectImei.dvt;
        document.getElementById("so_luong").textContent = selectImei.so_luong;
        document.getElementById("thue_suat").textContent = selectImei.thue_suat;
        document.getElementById("tien_thue").textContent = tien_thue;
        document.getElementById("tien").textContent = tien;
    } else {
        alert("Mã IMEI không tồn tại");
    }
});

