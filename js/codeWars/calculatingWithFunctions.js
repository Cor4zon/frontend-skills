function zero() {
    return 0;
  }
  
  function one() {
    return 1;
  }
  
  function two() {
    return 2;
  }
  
  function three() {
    return 3;
  }
  
  function four() {
    return 4;
  }
  
  function five() {
    return 5;
  }
  
  function six() {
    return 6;
  }
  
  function seven() {
    return 7;
  }
  
  function eight() {
    return 8;
  }
  
  function nine(func) {
    let result = 9;
    result = (func.name == 'plus' || func.name == 'minus') ?  9 + func() : 
    return result;
  }
  
  function plus(number) {
      return number;
  }
  
  function minus(number) {
    return -1 * number;
  }
  
  function times(number) {
    return number;
  }
  
  function dividedBy(number) {
    return -1 * number;
  }


  nine(plus);