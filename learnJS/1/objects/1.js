
let user = {
    name: "John",
    0: 1,
    1: 9,
    2: 3223,
    3: 32,
    length: 2,
}



Object.defineProperty(user, "name", {
    enumerable: false
})

for (let key in user) {
    console.log(key)
}

console.log(Object.keys(user));

