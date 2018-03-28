//1. Melakukan Looping menggunakan WHILE

var a = 2;
var b = 20

console.log('LOOPING PERTAMA');

  while(a <= 20){
    console.log(a + ' - I Love Coding');
    a += 2;
  }
  
console.log('LOOPING KEDUA');

  while(b >= 2){
    console.log(b + ' - I Love Coding');
    b -=2;
  }
  
//2. Melakukan looping menggunakan FOR


console.log('LOOPING PERTAMA');

for(var c = 1; c <= 20; c++ ){
  console.log(c + ' - I Love Coding');
}

for(var d = 20; d >= 1; d--){
  console.log(d +' - I Love Coding');
}

//3. Angka Ganjil Genap
//3a. Ganjil - Genap

for(var e = 1; e <=100; e++){
  if(e%2 !== 0){
    console.log('Ganjil');
  }
  else console.log('Genap');
}

//3b. Perulangan kelipatan 3

for(f = 1; f <= 100; f+=2){
  if(f%3===0){
    console.log(f + ' KELIPATAN 3');
  }
}

//3c. Perulangan kelipatan 6

for(g = 1; g <= 100; g+=5){
  if(g%6 === 0){
    console.log(g + ' KELIPATAN 6');
  }
}

//3d. Perulangan kelipatan 10

for(h=1; h<=100; h+=9){
  if(h%10 === 0){
    console.log(h + ' KELIPATAN 10');
  }
}