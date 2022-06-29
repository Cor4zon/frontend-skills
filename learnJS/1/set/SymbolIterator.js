let myString = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    length: 6,
    [Symbol.iterator]: function() {
        return {
            index: 0,

            next() {
                if (this.index < this.length) {
                    return {done: false, value: this[this.index++]}
                } else {
                    return { done: true };
                }
            }
        }
    }

}

for (let sym of myString) {
    console.log(sym);
}
