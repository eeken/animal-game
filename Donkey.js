const Animal = require("./Animal");

module.exports = class Donkey extends Animal{
  
  static defaults = {
    name: 'Donkey',
    legs: 4,
    model: "adult",
    price: 80,
    regNo: "?",
  };

  sayHi() {
    console.log("Hee-Haw!");
  }
};