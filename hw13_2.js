process.stdout.write("\033c");
process.stdout.write("\u001b[0J\u001b[1J\u001b[2J\u001b[0;0H\u001b[0;0W");
console.arr = (...args) =>
  console.table(args.map((i, index) => ({ [`param_${index + 1}`]: i })));

//Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, яке читається зліва направо і справа наліво однаково.
//  Інакше кажучи, відрізняється симетрією запису (розташування цифр), причому число знаків може бути як парним, так і непарним. Але.
// Паліндром можна отримати як результат операцій над іншими числами. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом,
// тобто записаним тими самими цифрами, але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти,
//  доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох.
// Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... Вам потрібно написати функцію, яка повертатиме об'єкт,
// де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома. Для того,
// щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому

function rev(en) {
  let rev = String(en).split("").reverse().join("");
  rev = parseInt(rev);
  return rev;
}

function fn(n, steps = 1) {
  let revNumber = rev(n);
  let result = n + revNumber;
  let length = String(result).length;
  if (!(length % 2)) {
    let pStart = String(result).slice(0, length / 2);
    let pEnd = String(result)
      .slice(length / 2, length)
      .split("")
      .reverse()
      .join("");
    console.arr(n, revNumber, result, pStart, pEnd, steps);
    if (pStart === pEnd) {
      return { result, steps };
    }
    return fn(result, steps + 1);
  }

  let pStart = String(result).slice(0, (length - 1) / 2);
  let pEnd = String(result)
    .slice()
    .slice((length + 1) / 2, length)
    .split("")
    .reverse()
    .join("");
  console.arr(n, revNumber, result, pStart, pEnd, steps);
  if (pStart === pEnd) {
    return { result, steps };
  }
  return fn(result, steps + 1);
}

// console.log(fn(12097)); // it is lychrel number
// console.log(fn(196)); // it is lychrel number
console.log(fn(96));
