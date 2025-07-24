let usdAmount = Number(prompt("Xin hãy nhập vào số tiền usd bạn muốn đổi :"));
let exchangeRate = Number(25000);
let vndAmount = usdAmount * exchangeRate;

console.log("Số tiền VND bạn nhận được là :" + vndAmount);
