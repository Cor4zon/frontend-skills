// how to take it easy?
let objResults: CalculationResults = [];


// type alias
type CalculationResults = {
    res: number,
    print: (a: string, b: number) => void,
}[];

type PrintMode = 'alert' | 'console';

// literal types

// union types
function printResult(result, printMode: PrintMode) {
    if (printMode === 'console') {
        console.log(result);
    } else if (printMode === 'alert') {
        alert(result);
    }
}
