//The user may fill out the form field any way they choose as long as it has the format of a valid US number. 

function telephoneCheck(str) {
   var regExp = /^1*\s*((\(\d{3}\))|\d{3})\s*\-*\d{3}\s*\-*\d{4}$/g;
   console.log(str.match(regExp));
   
  if (str.match(regExp) === null) {
         return false;
  }
  else  return true;
  
 }
 
 console.log(telephoneCheck("1 (555)555-5555"));