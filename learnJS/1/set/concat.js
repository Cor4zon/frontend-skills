
const arr = [1, 2, 3]
const arr2 = [1, 2, 3]

const arrObj = {
    0: 'banana',
    1: 'fruit',
    2: 'apple',
    [Symbol.isConcatSpreadable]: true,
    length: 3,
}

console.log(arr.concat(arr2));

console.log(arr.concat(arrObj));
