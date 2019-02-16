//function that looks through an array of objects (first argument) and returns an array of all objects 
//that have matching name and value pairs (second argument).

function whatIsInAName(collection, source) {
  
  var arr = [];
  
  var sourceKeys = Object.keys(source);

 
  return collection.filter(function(item){
    for (let i=0;i<sourceKeys.length;i++){
     if  (!item.hasOwnProperty(sourceKeys[i])||item[sourceKeys[i]]!==source[sourceKeys[i]] ) return false;
    }
    return true; 
  });
}

var a = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 },
 { "bat":2 }], { "apple": 1, "bat": 2 });
console.log(a);