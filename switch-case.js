var tanggal = 8;
var bulan = 8;
var tahun= 1900;
var tampil = '';

  


  if (tanggal > 0 && tanggal < 32 && tahun > 1899 && tahun < 2201 && bulan > 0 && bulan < 13 ){
     
    switch(bulan){
      case 1 : bulan = 'januari'; break;
      case 2 : bulan = 'februari'; break;
      case 3 : bulan = 'maret'; break;
      case 4 : bulan = 'april'; break;
      case 5 : bulan = 'mei'; break;
      case 6 : bulan = 'juni'; break;
      case 7 : bulan = 'juli'; break;
      case 8 : bulan = 'agustus'; break;
      case 9 : bulan = 'september'; break;
      case 10 : bulan = 'oktober'; break;
      case 11 : bulan = 'november'; break;
      case 12 : bulan = 'desember'; break;
    }
      
    console.log(tanggal+' ' + bulan +' '+ tahun);
    
  }
   else console.log('tanggal tidak tersedia')