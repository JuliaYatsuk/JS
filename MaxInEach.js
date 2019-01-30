function largestOfFour(arr) {

  var maxArr = []; 

  for (let i=0; i < arr.length; i++){
    const current = arr[i];
    let max = Number.NEGATIVE_INFINITY;

    for (let j=0; j < current.length; j++) {
       if (current[j] > max) max = current[j];
    }
    maxArr.push(max);
  }

  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);