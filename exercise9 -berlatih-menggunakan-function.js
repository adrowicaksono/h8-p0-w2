// 1. Tugas 1

  function shoutOut(){
    return 'Halo Funciton!';
  }
  
  console.log(shoutOut());
  
// 2. Tugas 2
  
    function calculteMultiply(a, b){
      return a*b;
    }
    
    var num1 = 5;
    var num2 = 6;
    
    var hasilPerkalian = calculteMultiply(num1, num2);
    console.log(hasilPerkalian);
    
// 3. Tugas 3

  function processSentence(a, b, c, d){
    return 'Nama saya ' + a + ' umur saya ' + b + ' tahun, alamat saya di ' + c + ', dan saya punya hobby yaitu ' + d + '!';
  }

  var nama = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(nama,age,address,hobby);
  console.log(fullSentence); 