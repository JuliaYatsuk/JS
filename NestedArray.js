function filteredArray(arr, elem) {
    let newArr = [];
    
    for(let i=0; i<arr.length;i++){
        if (arr[i].indexOf(elem)===-1)  newArr.push(arr[i]);
    
  }
}

  console.log(filteredArray([[13, 2, 13], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));