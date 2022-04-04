
let animal = {
    eats: true,
    legs: 4,
    eyes: [1, 3, 4]
}

let human =  {
    eats: false,
    legs: 2,
} 

// rabbit.__proto__ = animal;
let rabbit = Object.create(animal);

alert(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit));

Object.setPrototypeOf(rabbit, human);
console.log(Object.getPrototypeOf(rabbit));