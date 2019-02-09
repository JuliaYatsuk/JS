// the global variable
var globalTitle = " Winter Is Coming";


function urlSlug(title) {
      
       return title.split(" ").filter((obj)=>( obj !=='')).join("-").toLowerCase();
  
}


var winterComing = urlSlug(globalTitle); 

