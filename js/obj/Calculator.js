function Calculator() {
    // this = {};

    this.x = null;
    this.y = null;

    this.read = () => {
        this.x = +prompt('input x');
        this.y = +prompt('input y');
    }

    this.mul = () => {
        return this.x * this.y;
    }

    this.sum = () => {
        return this.x + this.y;
    }

    // return this;
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );