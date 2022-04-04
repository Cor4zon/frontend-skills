function add(num1, num2) {
    return num1 + num2;
}


function addRandom(num1) {
    return num1 + Math.random();
}


let a = 10;


function nonPure() {
    a = 4;
}

nonPure();
console.log(a);


const hobbies = ['Sport', 'Cooking'];

function printHobbies(h) {
    h.push('New hobby');
    console.log(h);
}

printHobbies(hobbies);