"use strict";

function count(string) {
  const counter = {};

  string.split('').forEach(s => {
      return (s in counter) ? counter[s]++ : counter[s] = 1
    })

  return counter;
}


console.log(count('aba'));
console.log(count(''));