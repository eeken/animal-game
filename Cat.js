const Animal = require("./Animal");

module.exports = class Cat extends Animal{
  
  static defaults = {
    name: 'Garfield',
    legs: 4,
    model: "adult",
    price: 50,
    regNo: "?",
  };

  sayHi() {
    console.log("Mjauu!");
  }

  
};
