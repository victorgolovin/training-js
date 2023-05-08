// Задание 1
// 1. Создать переменную day типа Number. В значении задать текущий день недели.
// 2. Создать переменную month типа Number. В значении задать текущий месяц.
// 3. Создать переменную year типа Number. В значении задать текущий год.
// 4. Создать переменную date типа String. В значении, используя обратные кавычки (``) собрать строку в формате dd/mm/yyyy
// 5. Вывести date в консоль.

const DAY = 08;
const MONTH = 05;
const YEAR = 2023;

let date = `${'Today date: '}${DAY}.${MONTH}.${YEAR}`;
console.log(date);

// Задание 2
// 1. Придумать название и создать переменную, которая будет отражать текущий курс доллара к рублю. 
// Актуальное значение можно загуглить.
// 2. Вывести в консоль тип данных этой переменной.
// 3. Вывести в консоль текст "1 Доллар США равно X Российских рублей". Вместо X подставить значение переменной

let dollar_to_ruble_exchange_rate = 76.82;
let dollar = 1;

console.log(typeof dollar_to_ruble_exchange_rate);

console.log(`${dollar} ${'Доллар США равно'} ${dollar_to_ruble_exchange_rate } ${'Российских рублей.'}`);