const Animal = require("./Animal");
module.exports = class Sheep extends Animal {

  static defaults = {
    name: 'Sheep',
    legs: 4,
    model: "adult",
    price: 180,
    regNo: "?",
  };
  
  sayHi() {
    console.log("Bääh! Bääh!");
  }
};
