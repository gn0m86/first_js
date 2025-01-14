function camelCase(word, separator) {
  let findSeparator = false;
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === separator) {
      findSeparator = true;
      continue;
    }
    if (findSeparator) {
      result += word[i].toUpperCase();
      findSeparator = false;
    } else {
      result += word[i].toLowerCase();
    }
  }
  return result;
}
console.log(camelCase("Ddfd ret sd jkh", " "));
