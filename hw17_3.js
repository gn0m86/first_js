//  intervalRac.
// Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
// Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
// Коли всі функції виконано, intervalRace має повернути масив із результатами.

const f1 = () => "f1";
const f2 = () => "f2";
const f3 = () => "f3";
const f4 = () => "f4";

const intervalRace = (arr, time) => {
  const result = [];

  let timeBegin = new Date();
  let index = 0;

  while (index !== arr.length) {
    if (new Date() - timeBegin > time) {
      try {
        result.push(
          typeof arr[index] === "function" ? arr[index]() : undefined
        );
      } catch (err) {
        console.error(err);
        result.push(undefined);
      }
      timeBegin = new Date();
      index++;
    }
  }

  return result;
};

console.log(intervalRace([f1, f2, f3, f4, "tt"], 1000));
