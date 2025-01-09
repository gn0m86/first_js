let userInput = prompt("Введіть рядок для реверсування:");

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

let result = reverseString(userInput);
console.log("Реверсований рядок: " + result);