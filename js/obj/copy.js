

let user = {
    name: 'Ivan'
}

let permissionRead = {
    canView: true
}

let permissionWrite = {
    canEdit: true
}

console.log(user);
console.log(Object.assign(user, permissionRead, permissionWrite));


let newUser = Object.assign({}, user);

newUser.name = 'Bill';
console.log(user);
console.log(newUser);