
let person = {
    name: "John Doe",
    age: "undefined",
    canSwim: true,
    
    cry() {
        console.log("asdlkfj");
    }
}



let bill = {
    name: "Bill",
    age: 34,
    __proto__: person,
}

// console.log(bill.canSwim);
// bill.cry()

console.dir(bill);
console.log(bill);
console.log(bill.__proto__)