const inputLetter = prompt("Введіть рядок");

function doubleLetter(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

let result = doubleLetter(inputLetter);
console.log(result);