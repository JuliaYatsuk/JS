//ROT13 cipher
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function rot13(str) { // LBH QVQ VG!
  var _str='';

  for(let i=0; i<str.length;i++){
   if (alphabet.indexOf(str[i])>=0&&alphabet.indexOf(str[i])<=12) {
        _str+=alphabet[alphabet.indexOf(str[i])+13];
    }
   else if(alphabet.indexOf(str[i])>12) {
     console.log(alphabet.indexOf(str[i]));
    _str+=alphabet[alphabet.indexOf(str[i])+13-26];
   }
   else _str+=str[i];
   
  }
  return _str;
}

// Change the inputs below to test
console.log(rot13("N"));