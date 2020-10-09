const Animal = require("./Animal");

module.exports = class Horse extends Animal {
  
  static defaults = {
    name: 'Horse',
    legs: 4,
    model: "adult",
    price: 60,
    regNo: "?",
  };

  sayHi() {
    console.log("Neigh! Neigh!");
  }
};
