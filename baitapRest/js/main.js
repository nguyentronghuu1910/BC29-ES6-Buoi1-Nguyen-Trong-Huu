const getEle = id => document.getElementById(id)

// Hàm tính điểm trung bình
const diemTB = (...arrDiem) => {
   let total = 0;
   let n = 0;

   for (const num of arrDiem) {
      total += num;
      n = arrDiem.length;
   }
   return total / n;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ KHỐI lỚP 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
getEle("btnKhoi1").onclick = () => {
   let toan = Number(getEle("inpToan").value);
   let ly = Number(getEle("inpLy").value);
   let hoa = Number(getEle("inpHoa").value);

   let result = diemTB(toan, ly, hoa).toFixed(1);

   getEle("tbKhoi1").innerHTML = result;
};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~ KHỐI lỚP 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
getEle("btnKhoi2").onclick = () => {
   let van = Number(getEle("inpVan").value);
   let su = Number(getEle("inpSu").value);
   let dia = Number(getEle("inpDia").value);
   let eng = Number(getEle("inpEnglish").value);

   let result = diemTB(van, su, dia, eng).toFixed(1);

   getEle("tbKhoi2").innerHTML = result;
}