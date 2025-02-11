console.clear();
// Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію,
//  яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою функцією.
//  Кожна функція повинна мати доступ до результату попередньої функції через замикання.

function sequence(...fns) {
  let counter;
  return function () {
    for (let i = 0; i < fns.length; i++) {
      counter = fns[i](counter);
    }
    return counter;
  };
}
const iterator = sequence(
  (first) => (first ?? 0) + 1,
  (first) => first + 1,
  (first) => first + 1
);
console.log(iterator());
