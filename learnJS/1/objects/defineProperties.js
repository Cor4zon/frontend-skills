const user = {
    name: "",
    age: undefined,
}

console.log(Object.defineProperties(user, {
    name: {value: "John", writable: false},
    age: {value: 18, configurable: false},
}))


console.log(Object.getOwnPropertyDescriptor(user, "name"));

console.log(Object.getOwnPropertyDescriptors(user));
