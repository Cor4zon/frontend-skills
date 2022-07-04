
let user = {
    name: "John",
}

Object.defineProperty(user, "name", {
    writable: false,
});

user.name = "Bob";

console.log(user);
