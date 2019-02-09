// delete all "false" elements

function bouncer(arr) {
    var a = arr.length;
    var newArr=[];
    for (let i = 0; i < a; i++){
         console.log(Boolean(arr[i]));
         if (Boolean(arr[i])===true) {
               newArr.push(arr[i]);
         }
    }
    console.log(newArr); 
    return newArr;
     
   }
   
   bouncer([7, "ate", "", false, 9]);
  // [false, null, 0, NaN, undefined, ""]