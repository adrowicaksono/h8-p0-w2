//1. Menyusun barisan bintang

for(a=0; a<=5; a++ ){
  console.log('*');
}



//2. Menyusun Barisan bintang dengan nested loop

var c = '';

for(e=0; e<5; e++){ 
    for(d=0; d<5; d++){
      c = c + '*';
    }
  c = c + '\n';
  
}
console.log(c);

//3. Menyusun barisn tangga dengan nested loop

var h = '';
for(f=0; f<5; f++){
  for(g=f; g<=f; g++){
    h = h+ '*';
  }
  console.log(h);
}