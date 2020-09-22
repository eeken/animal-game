const prompt = require("async-prompt");

// Import the classes
const Farm = require("./Farm");
const Person = require("./Person");
const Cow = require("./Cow");
const Dog = require("./Dog");
const Cat = require("./Cat");
const Pig = require("./Pig");
const Sheep = require("./Sheep");

async function main() {
  console.log("Välkommen till farmspelet!");

  const personName = await prompt("Vad heter du? ");
  const personAge = await prompt("Hur gammal är du? ");
  const money = await prompt("Hur mycket pengar har du? ");
  let ola = new Person(personName, personAge, money);
  let farm = new Farm("sunnanväg 6k", 100, ola);
  let cow = new Cow(4, farm);
  let dog = new Dog(4, farm);
  let pig = new Pig(4, farm);
  let cat = new Cat(4, farm);
  console.log(ola);
  console.log(farm);

  cow.sayHi();
  dog.sayHi();
  cat.sayHi();
  pig.sayHi();

  let mySheep = new Sheep({
    /*farm: ola,
    legs: 3,
    model: "child",
    price: 200,
    regNo: "ABC123",*/
  });

  console.log(mySheep);
}

main();
