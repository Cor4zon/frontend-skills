
let user = {
    name: 'John',
    money: 2332,

    [Symbol.toPrimitive](hint) {
        return hint === 'string' ? this.name : this.money;
    }
}

console.log(String(user));
console.log(+user);

