"use strict";

const getArrayFromNumber = (number) => {
    const digits = [];
    
    while (number > 0) {
        digits.push(number % 10);
        number = Math.floor(number / 10);
    }
    
    return digits.reverse();
  }
  
  function narcissistic(value) {
    const digits = getArrayFromNumber(value);
  
    let diginSum = 0;
    for (let i = 0; i < digits.length; i++) {
        diginSum += (digits[i] ** digits.length);
    }
  
    return diginSum === value;
  }