// bài tập 1
document.querySelector(".btn-success").onclick = function () {
    let soNgayLam = document.getElementById("soNgayLam").value * 1;
    let tongTienLuong = 0;
    tongTienLuong = soNgayLam * 100000;
    
    console.log(tongTienLuong);
    // Hiển thị dữ liệu
    document.getElementById(
      "ketQua"
    ).innerHTML = `Số tiền lương của bạn là ${tongTienLuong.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })}`;
};
// bài tập 2
document.querySelector(".btn-dark").onclick = function(){
    let soThuNhat = parseFloat(document.getElementById("soThuNhat").value);
    let soThuHai = parseFloat(document.getElementById("soThuHai").value);
    let soThuBa = parseFloat(document.getElementById("soThuBa").value);
    let soThuTu = parseFloat(document.getElementById("soThuTu").value);
    let soThuNam = parseFloat(document.getElementById("soThuNam").value);
    let soTrungBinh = 0;
    soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

    console.log(soTrungBinh);

    document.getElementById("ketQua2").innerHTML = `Giá trị trung bình là: ${soTrungBinh}`;
};
// bài tập 3
document.querySelector(".btn-danger").onclick = function(){
    let tienUSD = +document.getElementById("tienUSD").value;
    let tienVND = 0;
    tienVND = tienUSD * 23500;

    console.log(tienVND);

    document.getElementById(
        "ketQua3"
      ).innerHTML = `${tienUSD} USD bạn đổi được ${tienVND.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}`;
};

// bài tập 4
document.querySelector(".btn-light").onclick = function(){
    let chieuDai = parseFloat(document.getElementById("chieuDai").value);
    let chieuRong = parseFloat(document.getElementById("chieuRong").value);
    let chuVi = 0;
    chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = 0;
    dienTich = chieuDai * chieuRong;

    document.getElementById("ketQua4").innerHTML = `Chu vi hình chữ nhật là: ${chuVi}  <br> Diện tích hình chữ nhật là: ${dienTich}`;
};
// bài tập 5
document.querySelector(".btn-primary").onclick = function(){
    let so = parseInt(document.getElementById("so").value);
    let soHangDv = so % 10;
    let soHangChuc = Math.floor(so / 10);
    let tongKySo = 0;
    tongKySo = soHangDv + soHangChuc;

    document.getElementById("ketQua5").innerHTML = `Tổng 2 ký số là: ${tongKySo}`;
};