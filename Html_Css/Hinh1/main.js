function redirectToHinh2(){
    window.location.href = "../Hinh2/index.html";
}

function XoaDuLieuCu(){
    localStorage.removeItem("editData");
}

document.addEventListener("DOMContentLoaded", function (){
    XoaDuLieuCu();
    var saveData = localStorage.getItem("saveData");
    if(saveData){
        var parseData = JSON.parse(saveData);
        // var tableRow = document.getElementById("tbody");

        document.getElementById("ngay_lap").textContent = parseData.ngayLap || "";
        document.getElementById("so_phieu").textContent = parseData.soPhieu || "";
        document.getElementById("ma_kh").textContent = parseData.maKH || "";
        document.getElementById("ten_kh").textContent = parseData.tenKH || "";
        document.getElementById("t_tien").textContent = parseData.thanhTien || "";
        document.getElementById("t_ck").textContent = parseData.chietKhau || "";
        document.getElementById("t_thue").textContent = parseData.thue || "";
        document.getElementById("t_phai_thu").textContent = parseData.tongPhaiThu || "";
        document.getElementById("trang_thai").textContent = parseData.trangThai || "";
    }
});

function suaForm(){
    var ngayLapElement = document.getElementById("ngay_lap");
    console.log(ngayLapElement);
    var ngayLap = ngayLapElement ? ngayLapElement.textContent : "";
    var soPhieuElement = document.getElementById("so_phieu");
    console.log(soPhieuElement);
    var soPhieu = soPhieuElement ? soPhieuElement.textContent : "";
    var makhElement = document.getElementById("ma_kh");
    console.log(makhElement);
    var makh = makhElement ? makhElement.textContent : "";
    var tenkhElement = document.getElementById("ten_kh");
    console.log(tenkhElement);
    var tenkh = tenkhElement ? tenkhElement.textContent : "";
    var tongtienElement = document.getElementById("t_tien");
    console.log(tongtienElement);
    var tongtien = tongtienElement ? tongtienElement.textContent : "";
    var tongckElement = document.getElementById("t_ck");
    console.log(tongckElement);
    var tongCk = tongckElement ? tongckElement.textContent : "";
    var tongthueElement = document.getElementById("t_thue");
    console.log(tongthueElement);
    var tongthue = tongthueElement ? tongthueElement.textContent : "";
    var tongphaithuElement = document.getElementById("t_phai_thu");
    console.log(tongphaithuElement);
    var tongphaithu = tongphaithuElement ? tongphaithuElement.textContent : "";
    var trangthaiElement = document.getElementById("trang_thai");
    console.log(trangthaiElement);
    var trangthai = trangthaiElement ? trangthaiElement.textContent : "";

    var editData = {
        ngayLap: ngayLap,
        soPhieu: soPhieu,
        makh: makh,
        tenkh: tenkh,
        tongtien: tongtien,
        tongCk: tongCk,
        tongthue: tongthue,
        tongphaithu: tongphaithu,
        trangthai: trangthai
    };

    localStorage.setItem("editData", JSON.stringify(editData));

    window.location.href = "../Hinh2/index.html"
}
