let obj = {
    banana: 1,
    orange: 32,
    apple: 4.23,
}

// transformation idea

// 1. call Object.entries(obj) to convert object to array
const arr = Object.entries(obj);
console.log(arr);

// 2. apply map or filter or something else ...
const transformedArray = arr.map(([key, value]) => [key, value * 2]);
console.log(transformedArray);

// 3. convert array back to object
obj = Object.fromEntries(transformedArray);
console.log(obj);
