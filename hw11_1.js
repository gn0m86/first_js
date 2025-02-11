// logArguments
// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію з довільною кількістю
// аргументів і додає можливість логувати всі аргументи, передані у декоровану функцію.

function decorator(fn) {
  return function (...args) {
    console.log("Input parameters :", args);

    return fn.apply(this, args);
  };
}

let rev = decorator(() => {});

rev("Hello", 10, "test");
rev("World", 5, 66);
