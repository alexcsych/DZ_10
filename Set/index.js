// Створіть колекцію Set із початковими значеннями 1, 2, 3.

const set1 = new Set([1, 2, 3]);

// За допомогою методу has перевірте наявність
// елемента зі значенням 3, а потім елемента зі значенням 4.

console.log("set1:", set1);
console.log("set1.has(3):", set1.has(3));
console.log("set1.has(4):", set1.has(4));

// Додати ще кілька елементів.

set1.add(4).add(5).add(6);
console.log("set1:", set1);

// За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
// Знайдіть суму цих значень.

let summ = 0;

for (const item of set1) {
  console.log("item :>> ", item);
  summ += item;
}

console.log("summ:", summ);

// Видаліть елемент 2.

set1.delete(5);
set1.delete(6);

console.log("set1:", set1);

// Очистіть усю колекцію.

set1.clear();
console.log("set1:", set1);

// З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.

// const arr = [1, 6, 9, 4, 9, 1, 5, 6];
// const arrUniqValue = [...new Set(arr)];
// console.log("arrUniqValue:", arrUniqValue);

const arrUniqValue = [...new Set([1, 6, 9, 4, 9, 1, 5, 6])];
console.log("arrUniqValue:", arrUniqValue);

// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.

const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];
const arrUniqValue1 = [...new Set([...arr1, ...arr2])];
console.log("arrUniqValue1:", arrUniqValue1);

// *

const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

const names = [...new Set(messages.map((item) => item.name))];
console.log("names", names);

const usersMessages = new Map();
messages.forEach(({ name, message, date }) => {
  const key = { message, date };
  usersMessages.has(name)
    ? usersMessages.get(name).push(key)
    : usersMessages.set(name, [key]);
});

console.log("usersMessages: ", usersMessages);
