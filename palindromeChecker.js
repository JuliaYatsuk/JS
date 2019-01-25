/*Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.
 */
function palindrome(str) {
    let upStr = str.toUpperCase();
    let Regex = /[^A-Za-z0-9]/g ;
    let a = 0;
    upStr = upStr.replace(Regex,'');
    for (let i=0; i <= upStr.length/2; i++){
        if (upStr[i] === upStr[upStr.length-1-i]) {
           console.log(upStr[i]);
        }
        else return false;
    };
    return true;
    }
  
  
  let result = palindrome("0_0 (: /-\ :) 0-0");
 console.log(result );