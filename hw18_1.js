// sumArrayPromise.Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise.
// Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

const sumArrayPromise = (arr) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr.reduce((prev, item) => prev + item, 0));
    }, 3000);
  });

sumArrayPromise([1, 2, 3, 4, 5, 6, 7, -100]).then((result) => {
  console.log(`sum all number: ${result}`);
});
