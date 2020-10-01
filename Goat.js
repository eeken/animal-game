const Animal = require("./Animal");

module.exports = class Goat extends Animal {
  static defaults = {
    name: "Goat",
    legs: 4,
    model: "adult",
    price: 180,
    regNo: "?",
  };

  sayHi() {
    console.log("Bööh! Bööh!");
  }
};
