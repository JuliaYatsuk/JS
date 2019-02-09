//Largest world in the string
function findLongestWordLength(str) {

  var arr = str.split(' ');
  var max = 0;
  
  for (let i=0; i<arr.length;i++){
    if (arr[i].length > max) max = arr[i].length;
  }

  console.log(max);

 return max;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");