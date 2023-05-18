// Обьявление массива
// 1. new Array();
// 2. let arr = [];
let a = 1;
let b = 2;
let c = 3;

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);


// Длина массива
console.log(arr.length);

// Обращение к элементам по индексу
// 1. 0...- элементы с начала
// 2. length - n - элементы с конца
let index = 2;
console.log(arr[index]);
console.log(`В массиве лежат числа: ${arr[0]}, ${arr[1]}, ${arr[index]}.`);

console.log(arr[arr.length - 1]); // - обращение к последний элементу массива в данном примере - 7.

// Добавлене элемента в массив
// 1. Добавление в конец push ()
// 2. Добавление в конец unshift ()

console.log(arr); 
arr.push(8); // - добавление элемента в конец массива
console.log(arr);

arr.unshift(0); // - добавление элемента в начало массива
console.log(arr);

// Удаление элемента из массива 
// 1. удаление с конца массива pop()
// 2. удаление с нчала массива  shift()

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

// Хранение разных типов данных в массиве


// Перебор массива
// 1. Стандарный цикл for
// 2. for of

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (const element of arr) {
    console.log(element);
}

arr.forEach(function(i, el) {
    console.log(i, el);
});

console.log('----------------------')

// Задание 1
//  Создать массив из чисел от 1 до 10 и вывести числа в консоль.

// const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < NUMBERS.length; i++) { // - перебор цикла
//     console.log(NUMBERS[i]);
// }


//  Задание 2
//  Создать массив из чисел от 1 до 10, 
//  посчитать сумму чисел в массив и вывести в консоль.

// const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < NUMBERS.length; i++) {
//     sum = sum + NUMBERS[i];
// }

// console.log(sum);


//  Задание 3
//  Сформировать массив из чисел от 1 до 200, 
//  посчитайте среднее арифметическое и выведите в консоль.

// 1. Сформировать массив
// let numbers = [];
// for (let i = 1; i <= 200; i++) {
//     numbers.push(i);
// }

// // 2. Найти сумму 
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }

// console.log(sum);


// // 3. Ср. ариф = сумма / количество элементов в массиве
// const average = sum / numbers.length;
// console.log(average);

//  Задание 4
//  Создайте массив из 7 произвольных чисел. 
//  Найдите максимальный элемент в массиве и его индекс.
// console.log(Math.random());
// 1. Сгенерировать массив
// const numbers = [];

// for (let i = 0; i < 7; i++) {
//     numbers.push(Math.random(i));
// }

// // 2. Найти максимальный элемент и его индекс 

// let maxIndex = 0;
// let max = [maxIndex];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < max) continue; 
//     max = numbers[i];
//     maxIndex = i;
// }

// console.log(numbers);
// console.log(maxIndex, max);

//  Задание 5
//  Создайте массив из 10 произвольных чисел. 
//  Найдите количество четных элементов в массиве.

// 1. Создать 10 произвольных чисел.
// const NUMBERS_COUNT = 10;
// const numbers = [];

// for (let i = 0; i < NUMBERS_COUNT; i++) {
//     const random = Math.floor(Math.random() * NUMBERS_COUNT); // Math.floor - позволяет выводить целые числа
//     numbers.push(random);
// }

// // 2. Посчитать сколько четных чисел в массиве.

// let evenCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) continue;
//     evenCount++; // Увеличиваем считчик на один
// }

// console.log(numbers);
// console.log(evenCount);


//  Задание 6
//  Напишите программу, которая вычисляет максимальную, 
//  минимальную и среднюю температуру за неделю. 
//  Данные вводятся за каждый день недели с клавиатуры пользователем в массив temperatures.

// const REQUES_TEMPERATURE_TEXT = 'Введите температуру за день:';
// const DAYS = [
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота',
//     'Воскресенье'
// ]
// const temperatures = [];

// for (let i = 0; i < DAYS.length; i++) {

//     const temperatureInput = prompt(`${REQUES_TEMPERATURE_TEXT} ${DAYS[i]}`);
//     const temperature = Number(temperatureInput); // перевод из строк в числа (NUmber)

//     temperatures.push(temperature);
// }

// // Теперь вычисляем макс, сред и мин температуру

// let max = temperatures[0];
// let min = temperatures[0];
// let mid = 0;

// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > max) max = temperatures[i]; // если текущий элемент массива становится максимальным(то он становится максимальным)

//     if (temperatures[i] < min) min = temperatures[i]; // если текущий элемент массива становится минимальным (то он становится минимальным)

//     mid += temperatures[i];
// }

// const average = mid / temperatures.length;


// console.log(max, min, average);

//  Задание 7
//  Задайте массив из 9 произвольных имен. 
//  Выполните перестановку элементов. 
//  Первый меняется с последним, втором - с предпоследним; и так далее. 
//  Выполняется ли логика для массива из 10 произвольных имен. Если нет, исправьте.

const names = [
    'Сергей',
    'Виктор',
    'Саша',
    'Ира',
    'Света',
    'Юля',
    'Паша',
    'Антон',
    'Наташа'
];

const namesReversed = [];

for (let i = 0; i < names.length / 2; i++) {
    namesReversed[i] = names[names.length - i - 1];
    namesReversed[names.length - i - 1] = names[i];
}

console.log(names);
console.log(namesReversed);
console.log(names.reverse());