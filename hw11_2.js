console.clear();
// validate
// Вам необхідно написати функцію-декоратор validate(sum, validator), яка приймає на вхід функцію sum і додає можливість перевіряти аргументи,
//  передані у функцію sum, на відповідність заданому validator (наприклад, всі аргументи мають бути додатними). Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function decorator(fn) {
  return function (...args) {
    const findNegative = args.find((i) => i < 0);
    if (!!findNegative) {
      throw new Error(`Detect negative number ${findNegative}`);
    }
    return fn.apply(this, args);
  };
}

let rev = decorator(() => {});

rev(5, 6, 56, -5);
