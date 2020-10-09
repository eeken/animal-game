const Animal = require("./Animal");
module.exports = class Sheep extends Animal {
  static defaults = {
    name: "Sheep",
    legs: 4,
    model: "adult",
    price: 100,
    regNo: "?",
  };

  sayHi() {
    console.log("Bääh! Bääh!");
  }
};
