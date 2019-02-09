//Return the lowest index at which a value
// (second argument) should be inserted into an array (first argument) 
//once it has been sorted
function getIndexToIns(arr, num) {
      function compareNumeric(a, b) {
            return a - b;
          }
      arr.sort(compareNumeric);
      for (let i=0; i<arr.length; i++){
            if (arr[i] >= num) return i;
      }
      console.log(arr);
      return arr.length;
    }
    
    getIndexToIns([2,4,3,15,40, 60,56], 50);