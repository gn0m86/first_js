//Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив,
// у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let result = word[0].toUpperCase() + word.slice(1).toLowerCase();
    newWords.push(result);
  }
  return newWords;
}

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
