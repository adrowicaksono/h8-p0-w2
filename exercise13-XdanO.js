//1. X dan O 

function xo(str) {
  var x = 0;
  var o = 0;
  
    for(a=0; a<=str.length-1; a++){
        if(str[a] === 'x'){
          x = x + 1;
        } else o = o + 1 ;
    }
    return Boolean(x === o);
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true