function chunkArrayInGroups(arr, size) {
      var arrNew = [];
      var a = 0;
      var b = 0;
       arrNew[b] =[];
     
      for (let i=0;i<arr.length;i++){
         if (size-1>=a) {
               arrNew[b].push(arr[i]);
               a++;
         }
         else {
               b++;
               arrNew[b] = [];
               arrNew[b].push(arr[i]);
               a=1;
         }
      }
      console.log(arrNew);
      return arrNew;
    }
    
    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);