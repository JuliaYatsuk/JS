//Reverse a String

function reverseString(str) {
  
  var str_='';
  for (let i=0;i<str.length;i++){
    str_+=str[str.length-1-i]
  }
  return str_;
}

console.log(reverseString("hello"));