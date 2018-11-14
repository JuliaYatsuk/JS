const TAX=0.08;
const PHONE_PRICE=10;
const ACCESSORIES_PRICE=2;

const THRESHOLD=34;

var bankAccount = 54;
var totalPrice;

function total_price()
   {
      var total=0;
   while ( bankAccount > total + PHONE_PRICE )  
       { 
           total+=PHONE_PRICE;
           if (total < THRESHOLD) {
              total+=ACCESSORIES_PRICE;
           }
        } 

   return total;
   }

function calculateTax(total){
    return  total*TAX;
}

function formatePrice(total){
   return("$" + String(total.toFixed(2)));
}

totalPrice=total_price();
totalPrice+=calculateTax(totalPrice);

if(bankAccount >= totalPrice) {
   totalPrice=formatePrice(totalPrice);
   console.log("Your purchase amount is " + totalPrice);
}
else  console.log("You have not enough money for this purchase");
