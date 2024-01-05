
function checkCustomer() {
    var ma_kh = document.getElementById("ma_kh").value;
    const custommers = {
        "KH001": { "ten_kh": "Khách hàng 1", "dia_chi": "Hà Nội" }
    };
    if (custommers[ma_kh]) {
        document.getElementById("ten_kh").textContent = custommers[ma_kh].ten_kh;
        document.getElementById("dia_chi").textContent = custommers[ma_kh].dia_chi;
    } else {
         alert("Mã khách hàng không tồn tại");
    }

}
document.getElementById("ma_kh").addEventListener("input", checkCustomer);
