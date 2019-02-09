function checkCashRegister(price, cash, cid) {
       
       var change = [];
       var rest = Math.round((cash-price)*100)/100;
       console.log( {rest: rest});

       var _cid = []; //current state of cid

       //transform currency table
       for (let i = 0; i< cid.length; i++){
              _cid[i] = [];
              _cid[i][0] = CURRENCY[i][0];
              _cid[i][1] = cid[i][1];
       }
      

       //counting the change
       for (let i = _cid.length - 1; i >= 0; i--){
            let current= 0;
              while ((_cid[i][0] <= rest)&&(_cid[i][1]>=_cid[i][0])) {
                    rest=Math.round((rest - _cid[i][0])*100)/100;
                    current=Math.round((current+_cid[i][0])*100)/100;
                    _cid[i][1]=Math.round((_cid[i][1]-_cid[i][0])*100)/100;
              }
              if(current>0) change.push([CURRENCY[i][1], current]); 
              
       }

       //if cash-in-drawer empty
       var restInCashDraw = 0;
       for (let i =0;i<_cid.length;i++){
              restInCashDraw=Math.round((restInCashDraw+_cid[i][1])*100)/100;
       }
       if (rest == 0 && restInCashDraw == 0) return {status: "CLOSED", change: cid};

       if (rest != 0) return {status: "INSUFFICIENT_FUNDS", change: []};
       
       return {status: "OPEN", change: change};
       
     }
     
     const CURRENCY = [[0.01, "PENNY"],
       [0.05,"NICKEL"],
       [0.1, "DIME"],
       [0.25,"QUARTER"],
       [1, "ONE"],
       [5, "FIVE"],
       [10, "TEN"],
       [20, "TWENTY"],
       [100, "ONE HUNDRED"]];


     var cid_= [["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]];
     
     checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    // checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);