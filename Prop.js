var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  //console.log(myObj.hasOwnProperty("gift"));

  function checkObj(checkProp) {
    // Your Code Here
    if(myObj.hasOwnProperty(checkProp)) {
      return console.log(myObj[checkProp]);
    } else
    return "Not Found";
  }
  
  // Test your code by modifying these values
  checkObj("gift");

