let range = {
    0: 1,
    1: 2,
    2: 3,
    3: 10,
    4: 4,
    length: 5,
    [Symbol.iterator]: function() {
        this.current = 0
        return this;
    },
    next() {
        if (this.current < this.length) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    }
}

for (let num of range) {
    console.log(num);
}
