// Примитивные типы 
// age - имеет тип number
let age: number = 25;
// name - имеет тип string
let name: string = "Alice";
// isActive - имеет тип boolean
let isActive: boolean = true;
// nullableValue - имеет тип string или null
let nullableValue: string | null = null;

// Массивы примитивных типов 
// numbers - массив чисел 
let numbers: number[] = [1, 2, 3, 4];
// names - массив строк
let names: string[] = ["Alice", "Bob", "Charlie"];
// mixed - массив чисел и строк
let mixed: (number | string)[] = [1, "Alice", 2, "Bob"];
// colors - массив чисел, строк и булевых значений
let colors: (number | string | boolean)[] = [123, "red", true, "blue"];

// Функции и колбэки.
// Функция add принимает два числа и возвращает число 
const add: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// Функция logMessage принимает строку и ничего не возвращает 
const logMessage: (message: string) => void = (message) => {
  console.log(message); 
};