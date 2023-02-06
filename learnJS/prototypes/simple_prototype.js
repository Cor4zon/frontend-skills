let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
}

// устаревший способ
// rabbit.__proto__ = animal;

// современный способ
Object.setPrototypeOf(rabbit, animal);

// console.log(Object.getPrototypeOf(animal));
// console.log(Object.getPrototypeOf(rabbit));
console.log(rabbit.eats);

