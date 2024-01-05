var ma_kh = document.getElementById("ma_kh");
ma_kh.addEventListener("blur", function checkCustomer(){
    const custommers = {
        "KH001": { "ten_kh": "Khách hàng 1", "dia_chi": "Hà Nội" }
    };
    if (custommers[ma_kh]) {
        document.getElementById("ten_kh").value = custommers[ma_kh].ten_kh;
        document.getElementById("dia_chi").value = custommers[ma_kh].dia_chi;
    } else {
        alert("Mã khách hàng không tồn tại");
    }
});

