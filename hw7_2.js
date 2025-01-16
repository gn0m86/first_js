//Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив,
//  що містить тільки унікальні значення з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5, 8];
const array2 = [3, 4, 5, 6, 3, 7, 0];

function uniqueValues(array1, array2) {
  const arrayUnique = [];
  for (let i = 0; i < array1.length; i++) {
    if (!arrayUnique.includes(array1[i])) {
      arrayUnique.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!arrayUnique.includes(array2[i])) {
      arrayUnique.push(array2[i]);
    }
  }
  return arrayUnique;
}

const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);
