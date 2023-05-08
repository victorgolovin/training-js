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

// Задание 3
// 1. Придумать и создать переменную, которая будет отражать факт добавления товара 
// в список избранных товаров в интернет-магазине. Т.е. содержит ответ на вопрос "Товар в избранном?"
// 2. Если товар в избранном, вывести в консоль текст "Товар в избранном"
// 3. Если товар не в избранном, вывести в консоль текст "Товар не в избранном"

const PRODUCT_IN_FAVORITES = true;
const PRODUCT_NOT_IN_FAVORITES = false;
let product_in_favorites_question = 'Товар в избранном?';

console.log(product_in_favorites_question);

if (PRODUCT_IN_FAVORITES > PRODUCT_NOT_IN_FAVORITES) {
    console.log("Товар в избранном");
} else {
    console.log("Товар не в избранном");
}

// Задание 4
// 1. Создать объект me
// 2. Добавить в объект минимум 7 свойств, в которых будет раскрыта информация о вас. Например, имя, возраст и т.д.
// 3. Вывести объект в консоль

let age = 28;
let sex = 'male';
let first_name = 'Victor';
let second_name = 'Golovin';
let birth_date = '13.06.1994';
let top_food = 'meat';
let heith = 1.85;

const me = {
    Возраст: (age),
    Пол: (sex),
    Имя: (first_name),
    Фамилия: (second_name),
    Дата_Рождения: (birth_date),
    Еда: (top_food),
    Рост: (heith)
}

console.log(me);