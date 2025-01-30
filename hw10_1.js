// Вам необхідно використовувати масив нотифікацій з минулих занять.
// До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
// щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків
// об'єкта notifications таким чином, немов працюємо з "плоским" масивом.

let someObj = {
  source1: [{ text: "text23", date: 1738256536423 }],
  source3: [
    { text: "text333", date: 1738256536423 },
    { text: "text444", date: 1738256536423 },
  ],
  [Symbol.iterator]: function () {
    let current = 0;
    let allItems = Object.keys(this).reduce((prev, item) => {
      if (Array.isArray(this[item])) {
        for (let i = 0; i < this[item].length; i++) {
          prev.push(this[item][i]);
        }
        return prev;
      }
    }, []);

    return {
      next: function () {
        if (current < allItems.length) {
          return {
            value: allItems[current++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

for (const element of someObj) {
  console.log(element);
}
