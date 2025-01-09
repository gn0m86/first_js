let userInput = prompt("Введіть рядок для перевірки, чи є він паліндромом:");

function isPalindrome(str) {
    let length = str.length;
for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let result = isPalindrome(userInput);
console.log("Рядок " + (result ? "є" : "не є") + " паліндромом");