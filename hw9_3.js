// Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

function arrCheck(arr, cb) {
  return arr.reduce((obj, item) => {
    let param = cb(item);
    obj[param] ??= [];
    obj[param].push(item);
    return obj;
  }, {});
}

let newArr = arrCheck(inventory, ({ type }) => type);

console.log(newArr);
