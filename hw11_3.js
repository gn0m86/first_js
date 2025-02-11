console.clear();
// retry
// Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію і додає можливість викликати функцію
//  з максимальною кількістю спроб, а у разі помилки - повертає результат останнього виклику.

function decorator(fn, maxAttempts) {
  return function (...args) {
    let result;
    let i = 0;
    while (i < maxAttempts) {
      console.log(`try attempt ${i}`);
      try {
        result = fn.apply(this, args);
      } catch (error) {}
      i++;
    }
    return result;
  };
}

let rev = decorator((first) => {
  if (first === 6) {
    throw new Error(`Detect more`);
  }
  return first;
}, 3);

console.log(rev(5, 6, 56, "gfd", -5));
console.log(rev(6, 70, 456, "gghgfd", -45, 56));
