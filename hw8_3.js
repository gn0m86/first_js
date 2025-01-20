/*
Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
sum - сума всіх елементів масиву
average - середнє значення елементів масиву
min - мінімальне значення в масиві
max - максимальне значення в масиві
*/
const numbers = [1, 2, 3, 4, 5];
function analyzeArray(numbers) {
  let result = {
    sum: 0,
    average: 0,
    min: Infinity,
    max: -Infinity,
  };

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    result.sum = result.sum + number;
    if (result.max < number) {
      result.max = number;
    }
    if (result.min > number) {
      result.min = number;
    }
  }
  result.average = result.sum / numbers.length;
  return result;
}

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
