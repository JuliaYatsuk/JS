/*When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer.*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor(temperatureF){
    this.temperatureF =temperatureF  ;
  }
  //getter
  get temperature(){
    return   5/9 * (this.temperatureF - 32) ;
  }
  //setter
  set temperature(newTemperature){
    this.temperatureF=newTemperature * 9.0 / 5 + 32;
   }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);