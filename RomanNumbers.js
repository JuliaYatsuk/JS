//Roman numbers up to 3999

function convertToRoman(num) {
    let Rom = [];
    Rom[0]='';
    Rom[1]='I';
    Rom[2]='II';
    Rom[3]='III';
    Rom[4]='IV';
    Rom[5]='V';
    Rom[6]='VI';
    Rom[7]='VII';
    Rom[8]='VIII';
    Rom[9]='IX';
    Rom[10]='X';
    Rom[20]='XX';
    Rom[30]='XXX';
    Rom[40]='XL';
    Rom[50]='L';
    Rom[60]='LX';
    Rom[70]='LXX';
    Rom[80]='LXXX';
    Rom[90]='XC';
    Rom[100]='C';
    Rom[200]='CC';
    Rom[300]='CCC';
    Rom[400]='CD';
    Rom[500]='D';
    Rom[600]='DC';
    Rom[700]='DCC';
    Rom[800]='DCCC';
    Rom[900]='CM';
    Rom[1000]='M';
    Rom[2000]='MM';
    Rom[3000]='MMM';
    
   
   for (let n=0; n<=3;n++){
       for(let m=0;m<=9;m++){ 
           for(let j=0; j<=9;j++){ 
               for(let i=0;i<=9;i++){ 
               let l = 100*m +10*j +i;
               let k = 1000*n + l;
               Rom[k]=Rom[1000*n] + Rom[100*m]+Rom[10*j] + Rom[i] ;
               }
           }
       }
   }

 return Rom[num];
}

console.log(convertToRoman(12));