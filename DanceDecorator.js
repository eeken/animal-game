module.exports = class DanceDecorator {
  constructor() {
    throw new Error("Static class!");
  }

  static teachHowToDance(animal) {
    // Adding the dance method to the animal
    animal.dance = this.dance;
  }

  static dance() {
    return (
      "I am the " +
      this.constructor.name.toLowerCase() +
      " " +
      this.name +
      " and I am dancing!"
    );
  }
};
