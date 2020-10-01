const prompt = require("async-prompt");

// Import the classes
const Farm = require("./Farm");
const Person = require("./Person");
const Cat = require("./Cat");
const Cow = require("./Cow");
const Dog = require("./Dog");
const Donkey = require("./Donkey");
const Goat = require("./Goat");
const Horse = require("./Horse");
const Pig = require("./Pig");
const Sheep = require("./Sheep");
const DanceDecorator = require("./DanceDecorator");

async function main() {
  function buyAnimal(typeOfAnimal) {
    if (typeOfAnimal == "cat") {
      typeOfAnimal = new Cat(4, myFarm);
    }
    if (typeOfAnimal == "cow") {
      typeOfAnimal = new Cow(4, myFarm);
    }
    if (typeOfAnimal == "dog") {
      typeOfAnimal = new Dog(4, myFarm);
    }
    if (typeOfAnimal == "donkey") {
      typeOfAnimal = new Donkey(4, myFarm);
    }
    if (typeOfAnimal == "goat") {
      typeOfAnimal = new Goat(4, myFarm);
    }
    if (typeOfAnimal == "horse") {
      typeOfAnimal = new Horse(4, myFarm);
    }
    if (typeOfAnimal == "pig") {
      typeOfAnimal = new Pig(4, myFarm);
    }
    if (typeOfAnimal == "sheep") {
      typeOfAnimal = new Sheep(4, myFarm);
    }
    myFarm.animals.push(typeOfAnimal);
    console.log(myFarm.animals);
    newPerson.money -= typeOfAnimal.price;
    console.log(
      "You have bought a " +
        typeOfAnimal.constructor.name.toLowerCase() +
        ". You now have " +
        newPerson.money +
        "$ left."
    );
  }

  function teachAnimal(typeOfAnimal) {
    let i = myFarm.animals.findIndex(
      (animal) => animal.constructor.name === typeOfAnimal
    );
    if (i !== -1) {
      DanceDecorator.teachHowToDance(myFarm.animals[i]);
      console.log(myFarm.animals[i].dance());
    } else {
      console.log("You don't have a " + typeOfAnimal + " in your farm!");
    }
  }

  function makeSound(typeOfAnimal) {
    let i = myFarm.animals.findIndex(
      (animal) => animal.constructor.name === typeOfAnimal
    );
    if (i !== -1) {
      myFarm.animals[i].greet();
    } else {
      console.log("You don't have a " + typeOfAnimal + " in your farm!");
    }
  }

  console.log("Welcome to the farmgame!");

  /*const personName = await prompt("Vad heter du? ");
  const personAge = await prompt("Hur gammal är du? ");
  const money = await prompt("Hur mycket pengar har du? (1-10000) ");
  const address = await prompt("Var ligger din farm? ");
  const size = await prompt("Hur stor är din farm? (ha) ");*/
  let newPerson = new Person("Ola", 32, 2000);
  let myFarm = new Farm("Lund", 100, newPerson);

  let key = "";

  do {
    key = await prompt(
      "CHOOSE FROM THE MENU \n 1. Buy animal \n 2. Teach animal to dance \n 3. Make animal sound \n 4. Exit game \n"
    );
    switch (key) {
      case "1":
        do {
          key = await prompt(
            "Which animal you want to buy? \n 1. Cat \n 2. Cow \n 3. Dog \n 4. Donkey \n 5. Goat \n 6. Horse \n 7. Pig \n 8. Sheep \n 9. Back to main menu \n"
          );
          switch (key.toLowerCase()) {
            case "1":
              buyAnimal("cat");
              break;
            case "2":
              buyAnimal("cow");
              break;
            case "3":
              buyAnimal("dog");
              break;
            case "4":
              buyAnimal("donkey");
              break;
            case "5":
              buyAnimal("goat");
              break;
            case "6":
              buyAnimal("horse");
              break;
            case "7":
              buyAnimal("pig");
              break;
            case "8":
              buyAnimal("sheep");
              break;
            default:
              break;
          }
        } while (key != "9");
        break;
      case "2":
        do {
          key = await prompt(
            "What animal you want to make dance? \n 1. Cat \n 2. Cow \n 3. Dog \n 4. Donkey \n 5. Goat \n 6. Horse \n 7. Pig \n 8. Sheep \n 9. Back to main menu \n"
          );
          switch (key) {
            case "1":
              teachAnimal("Cat");
              break;
            case "2":
              teachAnimal("Cow");
              break;
            case "3":
              teachAnimal("Dog");
              break;
            case "4":
              teachAnimal("Donkey");
              break;
            case "5":
              teachAnimal("Goat");
              break;
            case "6":
              teachAnimal("Horse");
              break;
            case "7":
              teachAnimal("Pig");
              break;
            case "8":
              teachAnimal("Sheep");
              break;
            default:
              break;
          }
        } while (key != "9");
        break;
      case "3":
        do {
          key = await prompt(
            "What animal sound you want to make? \n 1. Cat \n 2. Cow \n 3. Dog \n 4. Donkey \n 5. Goat \n 6. Horse \n 7. Pig \n 8. Sheep \n 9. Back to main menu \n"
          );
          switch (key) {
            case "1":
              makeSound("Cat");
              break;
            case "2":
              makeSound("Cow");
              break;
            case "3":
              makeSound("Dog");
              break;
            case "4":
              makeSound("Donkey");
              break;
            case "5":
              makeSound("Goat");
              break;
            case "6":
              makeSound("Horse");
              break;
            case "7":
              makeSound("Pig");
              break;
            case "8":
              makeSound("Sheep");
              break;
            default:
              break;
          }
        } while (key != "9");
        break;
      default:
        break;
    }
  } while (key != 4);
}

main();
