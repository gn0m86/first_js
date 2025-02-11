console.clear();
// Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри
//  - стартове значення лічильника і його крок. Функція повертає нову функцію, яка при кожному виклику
// збільшує лічильник на значення і повертає його поточне значення. Лічильник повинен мати методи
// increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

function counter(startValue, step) {
  let counter = startValue;
  return function () {
    return {
      increment: function (inc) {
        counter += inc ?? step;
        return counter;
      },
      decrement: function (dec) {
        counter -= dec ?? step;
        return counter;
      },
      reset: function () {
        counter = startValue;
      },
    };
  };
}
const newSum = counter(5, 2);
const inc = newSum().increment;
const dec = newSum().decrement;
const res = newSum().reset;
console.log(inc());
console.log(inc(4));
console.log(dec());
console.log(dec());
console.log(dec());
console.log(dec());
console.log(res());
console.log(inc());
