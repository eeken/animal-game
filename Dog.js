const Animal = require("./Animal");

module.exports = class Dog extends Animal{
  
  static defaults = {
    name: 'Dog',
    legs: 4,
    model: "adult",
    price: 90,
    regNo: "?",
  };

  sayHi() {
    console.log("Voff! Voff!");
  }
};
