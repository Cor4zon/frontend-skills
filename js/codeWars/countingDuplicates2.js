function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((item, i, arr) => {
      return arr.indexOf(item) !== i && arr.lastIndexOf(item) === i;
    }).length;
}

console.log(duplicateCount("ababcde"));
