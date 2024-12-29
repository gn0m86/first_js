const inputNumber = prompt("Введіть число");

if (isNaN(inputNumber)) { 
    console.log("Будь ласка, введіть дійсне число."); } else {
if(inputNumber % 3 === 0 && inputNumber % 5 === 0){
    console.log("Ділиться на 3 і на 5, FizzBuzz")
} else if (inputNumber % 3 === 0) {
    console.log("Ділиться на 3, Fizz")
} else if (inputNumber % 5 === 0) {
    console.log("ділиться на 5, Buzz")
}
}
