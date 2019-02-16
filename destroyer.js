

   function destroyer() {
       var arr=arguments[0];
    
      for(let i=1;i<arguments.length;i++){
           while (arguments[0].indexOf(arguments[i])!=-1) console.log(arr.splice(arguments[0].indexOf(arguments[i]),1));
          
      }
    
       return arr;
     }
     
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));