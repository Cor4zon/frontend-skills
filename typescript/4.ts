class User {

    constructor(protected name: string, private age: number) {
        this.name = name;
        this.age = age;
    }
}

const user = new User("Max", 40);
console.log(user.name);
console.log(user.age);


interface CalculationContainer {
    res: number;
    print(): void;
}

