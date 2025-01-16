//Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з
//  інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

function calculateAverageGrade(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum = sum + items[i].grade;
  }
  return sum / items.length;
}

console.log(calculateAverageGrade(students).toFixed(1)); // 4.4
