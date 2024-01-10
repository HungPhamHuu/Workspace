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

function updateTable(index){
    var table = document.getElementById("tableTbody");
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);

    var tien_thue = index.gia * index.thue_suat / 100;
    var tien = index.gia + tien_thue;

    cell1.textContent = index.ma_vt;
    cell2.textContent = index.ten_vt;
    cell3.textContent = index.imei;
    cell4.textContent = index.dvt;
    cell5.textContent = index.gia;
    cell6.textContent = index.so_luong;
    cell7.textContent = index.thanh_tien;
    cell8.textContent = index.thue_suat;
    cell9.textContent = tien_thue;
    cell10.textContent = tien;
}
function updateSumValues(){
    var sumSoLuong = totalOrder(5);
    var sumGia = totalOrder(4);
    var sumThue = totalOrder(8);

    tSoLuongInput.value = sumSoLuong;
    tTienInput.value = sumGia;
    tThueInput.value = sumThue;

    var tPhaiThu = sumGia + sumThue - parseFloat(tienCocInput.value || 0);
    tPhaiThuInput.value = tPhaiThu;
}

function totalOrder(columnIndex){
    var sum = 0;
    var rows = listTableBody.getElementsByTagName("tr");

    for(var i = 0; i < rows.length; i++){
        var cell = rows[i].getElementsByTagName("td")[columnIndex];
        if(cell){
            sum += parseFloat(cell.textContent) || 0
        }
    }
    return sum;
    
}

var imei = document.getElementById("imei");
var listTableBody = document.getElementById("tableTbody");
var tSoLuongInput = document.getElementById("t_so_luong");
var tTienInput = document.getElementById("t_tien");
var tThueInput = document.getElementById("t_thue");
var tPhaiThuInput = document.getElementById("t_phai_thu");
var tienCocInput = document.getElementById("tien_coc");
var imeiCount = 0;
imei.addEventListener("change", function checkImei() {
    const produts = [
        { imei: "IP12PRX0001", gia: 12000000, ma_vt: "IP12PRX1", ten_vt: "Iphone", dvt: "Chiếc", so_luong: 1, thue_suat: 10, thanh_tien: 12000000 },
        { imei: "IP12PRX0002", gia: 12000000, ma_vt: "IP12PRX2", ten_vt: "SamSung", dvt: "Chiếc", so_luong: 1, thue_suat: 10, thanh_tien: 12000000 }
    ];
    var imei_input = imei.value;
    var selectImei = produts.find(produts => produts.imei === imei_input);
    if(imei_input !== ""){
        if (selectImei) {

            updateTable(selectImei);
            imeiCount++;
            if(imeiCount === 2){
                updateSumValues();
            }      
        } else {
            alert("Mã IMEI không tồn tại");
        }
    }
});

function isValidInput(){
    var soPhieu = document.getElementById("so_phieu").value;
    var ngayLap = document.getElementById("ngay_lap").value;
    var tienCoc = document.getElementById("tien_coc").value;
    
    if(!soPhieu || !ngayLap || isNaN(parseFloat(tienCoc))){
        alert("Vui lòng nhập đúng thông tin và định dạng");
        return false;
    }

    return true;
}
var button = document.getElementById("themMoi")
button.addEventListener("click", function saveLocalStorage() {
    if(!isValidInput()){
        return ;
    }

    var dataToSave = {
        soPhieu: document.getElementById("so_phieu").value,
        ngayLap: document.getElementById("ngay_lap").value,
        tienCoc: document.getElementById("tien_coc").value,
        trangThai: document.getElementById("trang_thai").value,
        maKH: document.getElementById("ma_kh").value,
        tenKH: document.getElementById("ten_kh").value,
        diaChi: document.getElementById("dia_chi").value,
        imei: document.getElementById("imei").value,
        maNV: document.getElementById("ma_nv").value,
        tenNV: document.getElementById("ten_nv").value,
        maHang: document.getElementById("ma_hang").value,
        soLuong: document.getElementById("t_so_luong").value,
        thanhTien: document.getElementById("t_tien").value,
        chietKhau: document.getElementById("t_ck").value,
        thue: document.getElementById("t_thue").value,
        diem: document.getElementById("t_diem").value,
        tongPhaiThu: document.getElementById("t_phai_thu").value,
    };

    localStorage.setItem("saveData", JSON.stringify(dataToSave));

    window.location.href = "../Hinh1/index.html";
});

document.addEventListener("DOMContentLoaded", function(){
    var editData = localStorage.getItem("editData");

    if(editData){
        var parseData = JSON.parse(editData);

        document.getElementById("ngay_lap").value = parseData.ngayLap || "";
        document.getElementById("so_phieu").value = parseData.soPhieu || "";
        document.getElementById("ma_kh").value = parseData.makh || "";
        document.getElementById("ten_kh").value = parseData.tenkh || "";
        document.getElementById("t_tien").value = parseData.tongtien || "";
        document.getElementById("t_ck").value = parseData.tongCk || "";
        document.getElementById("t_thue").value = parseData.tongthue || "";
        document.getElementById("t_phai_thu").value = parseData.tongphaithu || "";
        document.getElementById("trang_thai").value = parseData.trangthai || "";
    }
});


