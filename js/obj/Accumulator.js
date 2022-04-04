function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        this.value += +prompt("N", 0);
    }
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений