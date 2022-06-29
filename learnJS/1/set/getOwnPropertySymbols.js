

const obj = {
    1: 'b',
    2: 'c',
    money: 3232,
    [Symbol.isConcatSpreadable]: true,
}

console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj));
console.log(obj);

for (let key in obj) {
    console.log(key);
}
