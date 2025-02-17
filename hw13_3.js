process.stdout.write("\033c");
process.stdout.write("\u001b[0J\u001b[1J\u001b[2J\u001b[0;0H\u001b[0;0W");
console.arr = (...args) =>
  console.table(args.map((i, index) => ({ [`param_${index + 1}`]: i })));

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
// Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив,
//  що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2] і [3, 2, 1].

// [1,2,3]
// [1,3,2]
// ------
// [2,3,1]
// [2,1,3]
// ------
// [3,2,1]
// [3,1,2]

function swap(arr) {
  let result = [];

  function swapElement(current, lastElement) {
    if (lastElement.length === 0) {
      result.push(current);
    } else {
      for (let i = 0; i < lastElement.length; i++) {
        let curr = current.concat(lastElement[i]);
        let last = lastElement.slice(0, i).concat(lastElement.slice(i + 1));
        swapElement(curr, last);
      }
    }
  }

  swapElement([], arr);
  return result;
}

let array = [1, 2, 3];
let permutations = swap(array);
console.log(permutations);
