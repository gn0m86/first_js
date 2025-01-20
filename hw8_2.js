//Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив,
//  що містить елементи, які є в обох вихідних масивах.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(arr1, arr2) {
  let uniqueArray = [];
  for (let i = 0; i < arr1.length; i++) {
    let newArray = arr1[i];
    if (arr2.includes(newArray)) {
      uniqueArray.push(newArray);
    }
  }
  return uniqueArray;
}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]
