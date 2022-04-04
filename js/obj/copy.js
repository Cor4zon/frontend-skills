
let user = {
    name: 'Bob'
}

let readPermision = {
    canRead: true
}

let writePermision = {
    canWrite: true
}

console.log(user);
Object.assign(user, writePermision, readPermision);
console.log(user);

let newUser = Object.assign({}, user);
newUser.name = 'Mike';

console.log(user);
console.log(newUser);