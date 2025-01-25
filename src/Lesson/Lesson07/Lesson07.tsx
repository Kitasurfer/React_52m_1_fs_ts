// 1. Тип any - полная свобода типов (использовать с осторожностью)
let city: any = 'Berlin';
city = 2321112; // Меняем тип на число
city = [2343, 'London', true]; // Меняем тип на массив
// Лучшая практика: избегать any, использовать только когда тип действительно неизвестен

// 2. Интерфейсы с необязательными свойствами
interface User {
  name: string;
  
  // Вариант 1: необязательное свойство (можно вообще не указывать)
  age?: number;
  
  // Вариант 2: обязательное свойство с возможным undefined
  // age: number | undefined;
}

const userData: User = {
  name: 'John',
  age: 89 // Можно указать
};

const userObj: User = {
  name: 'Marta',
  // age: undefined // Обязательно указать если используется number | undefined
};

// 3. Слияние интерфейсов (declaration merging)
interface User {
  // Новые свойства должны быть совместимы с предыдущими объявлениями
  role?: string | null;
  
  // Нельзя переопределить существующее свойство:
  // age: string; // Ошибка: свойство age уже объявлено как number
}

const user: User = {
  name: 'Tom',
  role: null // Явное указание null
};

// 4. Разница между optional и union с undefined
interface Example {
  optionalProp?: string;    // Можно не указывать вообще
  unionProp: string | undefined; // Должно быть указано явно
}

const example1: Example = {
  unionProp: undefined // Обязательно указать
};

const example2: Example = {
  unionProp: 'test',
  // optionalProp можно не указывать
};

// 5. Наследование интерфейсов
interface Person {
  personFullName: string;
  email: string;
  phone?: string; // Необязательное свойство в базовом интерфейсе
}

interface Admin extends Person {
  adminId: number;
  accessLevel: 'basic' | 'super'; // Литеральные типы
}

const adminData: Admin = {
  personFullName: 'John Johnson',
  adminId: 13435,
  email: 'j@gmail.com',
  accessLevel: 'super' // Только определенные значения
};

// 6. Расширенные возможности интерфейсов
interface UserWithMethods extends User {
  // Добавляем методы
  getFullInfo(): string;
  // Метод с необязательным параметром
  updateName(newName: string, forceUpdate?: boolean): void;
}

const advancedUser: UserWithMethods = {
  name: 'Alice',
  getFullInfo() {
    return `${this.name} [${this.role || 'no role'}]`;
  },
  updateName(newName, forceUpdate = false) {
    if (forceUpdate || newName.length > 2) {
      this.name = newName;
    }
  }
};

// 7. Интерфейсы для функций
interface StringFormatter {
  (input: string): string;
  prefix?: string;
}

const upperCaseFormatter: StringFormatter = (input) => input.toUpperCase();
upperCaseFormatter.prefix = 'FORMATTED:';

// 8. Интерфейсы с индексными сигнатурами
interface DynamicDictionary {
  [key: string]: number | string;
  // Обязательные свойства должны соответствовать индексной сигнатуре
  id: number; // OK, так как number соответствует number | string
}

const dynamicData: DynamicDictionary = {
  id: 123,
  tempValue: 42,
  description: 'test'
};

// 9. Readonly свойства
interface ImmutablePoint {
  readonly x: number;
  readonly y: number;
}

const point: ImmutablePoint = { x: 10, y: 20 };
// point.x = 5; // Ошибка: нельзя менять readonly свойство

// 10. Интерфейсы с generics
interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

const userResponse: ApiResponse<User> = {
  data: { name: 'Bob' },
  status: 200
};

const numberResponse: ApiResponse<number[]> = {
  data: [1, 2, 3],
  status: 200
};

// Типизация через type
// Используется для создания усложненного типа, объединения типов и создания алиасов
type Weight = string | number | null;

// Используется для создания типов объектов, объединения типов и создания алиасов
type Animal = {
	name: string;
	weight?: number;
};
 
const animalData: Animal = {
	name: 'Lion',
	weight: 200
};

const personWeight: Weight = null;

// Используется для создания нового типа на основе существующего типа (объединение типов)
type NewAnimal = Animal & {country: string};
// Использование нового типа NewAnimal
const zebraAnimal: NewAnimal = {
	name: 'Zebra',
	weight: 300,
	country: 'Kenya'
};

// Generic типы (обобщенные типы) - позволяют создавать типы, которые могут работать с разными типами данных 
//в момент использования!
type CostomTupel<T = string> = [T, string, number];
// Использование generic типа
const arrayMix: CostomTupel<boolean> = [false, 'Smith', 45];
const arrayMix2: CostomTupel<string> = ['John', 'Smith', 45];
const arrayMix3: CostomTupel = [ 'John', 'Smith', 45];


// Generic & Interface
interface Fruit<T = number> {
	title: string,
	address: T
}
const fruit1: Fruit = {
	title: 'Apple',
	address: 23746
}
const fruit: Fruit<string> = {
	title: 'Grape',
	address: 'Berlin 32342'
}
// const result: Fruit<string> = await fetch('sdf')
// const result: Fruit = await fetch('sdfdf')

// Пример использования union для ограничения переменных типа при их объявлении
type Status = 'success' | 'error' | 'loading';

const status: Status = 'success'; // OK
const status2: Status = 'loading'; // OK
const status3: Status = 'error'; // OK
//const status4: Status = 'test'; // Ошибка: значение 'test' не соответствует типу Status