function padString(str, length, symbol, toLeft) {
   if ((length - str.length) < 0){
    return str;
   } 
    let spaces = symbol.repeat(length - str.length)
   if (toLeft){
    return spaces + str
   }
    return str + spaces
};

console.log(padString("Ivanov", 10, "*"));