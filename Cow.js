const Animal = require("./Animal");

module.exports = class Cow extends Animal{
  
  static defaults = {
    name: 'Cow',
    legs: 4,
    model: "adult",
    price: 180,
    regNo: "?",
  };

  sayHi() {
    console.log("Muuuuuuuuuu!");
  }
};
