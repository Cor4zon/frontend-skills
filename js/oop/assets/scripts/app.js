

class Person {
  name = 'Max';

  constructor() {
    this.age = 340;
  }
  
  greet() {
    console.log('hi, i aam ' + this.name);
  }
}

const person = new Person();


person.greet();