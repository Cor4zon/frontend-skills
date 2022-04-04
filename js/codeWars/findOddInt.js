function findOdd(numbers) {
    numbers = numbers.sort();
    console.log(numbers);
    let i = 0;
    let last = 0;
    let first = 0;
    
    
    while (true) {
      first = numbers.lastIndexOf(numbers[i]);
      last = numbers.indexOf(numbers[i]);
      
      if ((last - first) % 2) {
          i = numbers.lastIndexOf(numbers[i]) + 1;
          continue;
      }
      return numbers[i];
    }
  }