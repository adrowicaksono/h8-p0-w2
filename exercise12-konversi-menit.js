//1. Konversi Menit
function konversiMenit(menit) {
  var h = String(Math.trunc(menit / 60));
  var m = String(menit%60);
  
  if(m.length < 2){
    m = '0'+ m;
  }
  
  
  return h+':'+m;  
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00