//Convert a string to spinal case

function spinalCase(str) {
  var str_ = str.split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])|\W|_/).join("-").toLowerCase();
    // Or you could replace low-upper case to low-space-uppercase
   // str_ = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str_;
}

var a = spinalCase('The_Andy_Griffith_Show');
console.log(a);