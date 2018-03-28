var nama = 'Zero';
var peran ='penyihir';

  if(nama === '' && peran === ''){
    console.log('Nama harus diisi!');
    }
    
    else if(peran === 'ksatria'){
      console.log('Selamat datang di dunia Proxytia, '+ nama + '.\nHalo ' + peran +' '+nama+' kamu dapat menyerang dengan senjatamu!');
    }
    else if(peran === 'tabib'){
      console.log('Selamat datang di dunia Proxytia, '+ nama + '.\nHalo ' + peran +' '+nama+' kamu akan membantu temanmu yang terluka.');
    }
    else if(peran === 'penyihir'){
      console.log('Selamat datang di dunia Proxytia, '+ nama + '.\nHalo ' + peran +' '+nama+' ciptakan keajaiban yang membantu kemenaganmu !');
    }
    else console.log(nama +', Pilih peranmu untuk memulai game!');