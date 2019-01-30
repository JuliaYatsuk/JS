function titleCase(str) {
     str = str.toLowerCase();
     var strNew = str.split(' ');
     str = '';
     for (let i=0;i<strNew.length;i++){
          // /(^|\s)\S/
         // let a = strNew[i][0].to
          strNew[i] = strNew[i].replace(strNew[i][0],strNew[i][0].toUpperCase());
          if (i!=0) str+=' '+strNew[i];
          else str+=strNew[i];
     }
     console.log(str);
     return str;
   }
   
   titleCase("I'm a little tea pot");

   /*
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
   */