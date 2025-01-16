//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5];

function reverseArray(inputArray) {
  const newArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    newArray.push(inputArray[i]);
  }
  return newArray;
}

const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
