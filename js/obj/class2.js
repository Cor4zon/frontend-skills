 class AgedPerson {
     info = 444;

     printAge() {
         console.log(this.age)
     }
 }

class Person extends AgedPerson {
    name = 'Max';
    
    constructor() {
        super();
        this.age = 30;
    }

    greet = () => {
        console.log('Hi ' + this.name +
         ' age ' + this.age);
    }
}

const person = new Person();

person.greet();
person.printAge();
console.dir(person);
console.log(Object.getPrototypeOf(person));