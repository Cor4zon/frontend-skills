
let s = 'adslkfjdsajlkf';

let iterator = s[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) {
        break;
    }
    console.log(result.value);
}
