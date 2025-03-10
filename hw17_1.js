// randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.
// Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

function randomDelayPrint(str) {
  str.split("").forEach((i) => {
    let timeout = Math.floor(Math.random() * 1001);
    setTimeout(() => {
      console.log(i, `delay ${timeout} ms`);
    }, timeout);
  });
}

randomDelayPrint("Hello");
// Очікуваний результат (затримки між літерами будуть різними):
// H (невелика затримка)
// e (велика затримка)
// l (маленька затримка)
// l (маленька затримка)
// o (велика затримка)
