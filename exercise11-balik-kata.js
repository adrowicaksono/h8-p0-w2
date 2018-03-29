//1. Balik kata

function balikKata(kata) {
  var reverse = '';
  var word = kata.length-1; 
  
  for(a=word; a>=0; a--){
    reverse = reverse + kata[a] 
  }
  return reverse;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS