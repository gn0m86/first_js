let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let gcd = findGCD(num1, num2);
console.log("НСД чисел " + num1 + " і " + num2 + " дорівнює " + gcd);