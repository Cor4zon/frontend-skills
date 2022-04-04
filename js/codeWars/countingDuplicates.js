function duplicateCount(text) {
  let counter = 0;
  text = text.toLowerCase().split("").sort();

  console.log(text);

  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
      counter++;
      i = text.lastIndexOf(text[i]) + 1;
    }
  }

  return counter;
}

console.log(duplicateCount("ababcde"));
