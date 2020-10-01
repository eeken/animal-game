module.exports = class Person {

  static hasBeenInstantiated = false;

  constructor(name, age, money) {
    if (Person.hasBeenInstantiated) {
       throw new Error("You can only create one instance of Person!");
    }
    this.name = name;
    this.age = age;
    this.money = money;
    Person.hasBeenInstantiated = true;
  }


};
