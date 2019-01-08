var numJewelsInStones = function(J, S) {
    var res = 0;
    var num;
    
    for (var i = 0; i < J.length; i++) {
        var regexp = new RegExp(J[i], "g");
        var num = S.match(regexp);
        if (num!=null) res+=num.length;
    }
    
    return res;
};

var a = numJewelsInStones('bs','abaaassddaaas');
console.log(a);

