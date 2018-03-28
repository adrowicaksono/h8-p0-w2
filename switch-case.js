var tanggal = 8;
var bulan = 5;
var tahun= 1900;
var tampil = '';


  if (tanggal > 0 && tanggal < 32 && tahun > 1899 && tahun < 2201 && bulan > 0 && bulan < 13 ){
       
      switch(bulan){
        case 1  : tampil = tanggal + ' januari ' + tahun; break;
        case 2  : tampil = tanggal + ' februari ' + tahun; break;
        case 3  : tampil = tanggal + ' maret ' + tahun; break;
        case 4  : tampil = tanggal + ' april ' + tahun; break;
        case 5  : tampil = tanggal + ' mei ' + tahun; break;
        case 6  : tampil = tanggal + ' juni ' + tahun; break;
        case 7  : tampil = tanggal + ' juli ' + tahun; break;
        case 8  : tampil = tanggal + ' agustus ' + tahun; break;
        case 9  : tampil = tanggal + ' september ' + tahun; break;
        case 10 : tampil = tanggal + ' oktober ' + tahun; break;
        case 11 : tampil = tanggal + ' november ' + tahun; break;
        case 12 : tampil = tanggal + ' desember ' + tahun; break;
        
      } 
      
      
      
    console.log(tampil);
    
  }
   else console.log('tanggal tidak tersedia')