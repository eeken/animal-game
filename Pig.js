const Animal = require("./Animal");

module.exports = class Pig extends Animal{
  
  static defaults = {
    name: 'Pig',
    legs: 4,
    model: "adult",
    price: 110,
    regNo: "?",
  };

  sayHi() {
    console.log("Nöff! Nöff!");
  }
};
