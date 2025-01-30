//Написати функцію sqr, яка приймає 2 аргументи: (x, cache), де x є number і cache - зовнішній map. Функція має виконувати умови:
// - перевіряти, чи є в cache вже обчислений квадрат від х
// - повертати існуючий запис з cache в разі його наявності
// - обчислювати квадрат від х в разі його відсутності в cache
// - записувати в cache обчислений квадрат від х в разі його відсутності в cache
// - повертати новий запис з cache

let cache = {};

function calc(x) {
  cache[x] ??= x * x;
  return cache[x];
}
console.log(calc(5));
console.log(calc(6));
console.log(calc(7));
console.log(calc(8));
console.log(cache);
