module.exports = class Animal {
  
  constructor(settings) {
    Object.assign(this, this.constructor.defaults, settings);

    if (this.constructor === Animal) {
      throw new Error('Animal class can not be instantiated');
    }

    let finalMethods = ['present', 'greet']; 
    let abstractMethods = ['sayHi']
    let obj = this
    while (obj.constructor !== Animal) {
      obj = Object.getPrototypeOf(obj);
    }

    for (let method of [...finalMethods, ...abstractMethods]) {
      if (this[method] !== obj[method] && finalMethods.includes(method)) {
        throw new Error('You can not override the final method ' + method);
      }
      if (this[method] === obj[method] && abstractMethods.includes(method)) {
        throw new Error('You must override the abstract method ' + method);
      }
    }
  }

  greet() {
    this.present()
    this.sayHi()
  }

  present() {
   console.log("Hi I am a "
        + this.constructor.name.toLowerCase() + "! This is my special sound!");
    
  }

  sayHi() {
    console.log("Im an animal!");
  }
};
