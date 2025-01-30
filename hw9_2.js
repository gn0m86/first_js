// Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date.
// Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

let arrayStart = [
  {
    source: "source1",
    text: "text",
    date: Date.now(),
  },
  {
    source: "source3",
    text: "text",
    date: Date.now(),
  },
  {
    source: "source3",
    text: "text",
    date: Date.now(),
  },
];
function arrCheck(arr) {
  return arr.reduce((obj, item) => {
    obj[item.source] ??= [];
    obj[item.source].push({ text: item.text, date: item.date });
    return obj;
  }, {});
}

let newArr = arrCheck(arrayStart);

console.log(newArr);
