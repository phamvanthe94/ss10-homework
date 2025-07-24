let math = Number(prompt("Hãy nhập vào điểm học môn toán:"));
let physics = Number(prompt("Hãy nhập vào điểm học môn vật lý:"));
let chemistry = Number(prompt("Hãy nhập vào điểm học môn hóa học :"));
let averageScore = (math + physics + chemistry) / 3;

console.log(
  "Điểm trung bình ba môn học của bạn là :" + averageScore + " " + "điểm"
);
