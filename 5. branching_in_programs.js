// if
const isRoadEmpty = true;

if (isRoadEmpty) {
    console.log('Code in progres');
}

const myAge = 20;

if (myAge >= 18) {
    console.log('i am adult');
}

// if / else
const myAge2 = 14;

if (myAge2 >= 18) {
    console.log('i am adult');
} else {
    console.log('i am not adult');
}

// if / else if
const myAge3 = 14;

if (myAge3 >= 18) {
    console.log('i am adult');
} else if (myAge3 > 15){
    console.log('yes i 15 older');
}

// if / else if / else
const myAge4 = 14;

if (myAge4 >= 18) {
    console.log('i am adult');
} else if (myAge4 > 15){
    console.log('yes i 15 older');
} else {
    console.log('yes i under 15');
}

// switch
const z = 154;

switch (z) {
    case 154:
        console.log('Переменная равна 154');
        break;
    case 155:
        console.log('Переменная равна 155');
        break;

    default:
        console.log('По-умолчанию');
        break;
}

// ----------------------------------------
console.log('-split-')
// ----------------------------------------

// Задание 1

// 1. Создайте переменную a с типом данных Number. Можно указать произвольное значение.
// 2. Если тип данных созданной переменной действительно число, 
// выведите в модальное окно браузера текст "Это число со значением X".
// 3. Вместо X подставьте значение переменной
const TYPE_OF_NUMBER = 'number';
const a = 55;
const VALUE_TEXT = 'Это число со значение';

if (typeof a === TYPE_OF_NUMBER) {
    alert(`${VALUE_TEXT} ${a}`);
}

// Задание 2
// Представим, что мы создаем фитнес-приложение для тренировок в зале. 
// Собираем исходные данные о том, как сейчас занимается пользователь:

// 1. Создайте переменную repsCount. Проинициализируйте ее количеством повторений.
// 2. Если количество повторений меньше или равно 5, выведите в консоль текст "Вы работаете на силу"
// 3. Если количество повторений меньше или равно 12, выведите в консоль текст "Вы работает на массу"
// 4. Если пользователь делает больше 12 повторений, выведите в консоль текст "Вы работаете на рельеф"
const STRENGTH_COUNT_MAX = 5;
const WEIGTH_COUNT_MAX = 12;
const STRENGTH_COUNT_MAX_TEXT = 'Вы работаете на силу';
const WEIGTH_COUNT_MAX_TEXT = 'Вы работает на массу';
const RELIEF_COUNT_MAX_TEXT = 'Вы работаете на рельеф';

const repsCount = [6];

if (repsCount <= STRENGTH_COUNT_MAX) {
    console.log(STRENGTH_COUNT_MAX_TEXT);
} else if (repsCount <= WEIGTH_COUNT_MAX) {
    console.log(WEIGTH_COUNT_MAX_TEXT);
} else {
    console.log(RELIEF_COUNT_MAX_TEXT);
}

// Задание 3
// Продолжаем работу над фитнес-приложением и добавляем создание программы тренировок под цель пользователя.

// 1. В модальном окне спросите у пользователя цель тренировок. Для этого используйте функцию prompt()

// let a = prompt('Любой вопрос'); // Браузер покажет модальное окно, пользователь сможет ввести текст, результат сохранится в переменную.
// 2. Если цель занятий "Похудеть", выведите в модальное окно текст "Составляю программу тренировок для похудения". 
// Для этого используйте функцию alert()

// alert('Любой текст')
// 3. Если цель занятий "Мышечная масса", выведите в модальное окно текст "Составляю программу тренировок для набора мышечной массы"
// 4. Если цель занятий "Сила", выведите в модальное окно текст "Составляю программу тренировок для развития силы"
// 5. Если цель занятий "Тонус", выведите в модальное окно текст "Составляю программу тренировок для поддержания тонуса"
// 6. Если цель занятий "Рельеф", выведите в модальное окно текст "Составляю программу тренировок для рельефа"
// 7. В случае, если пользователь ввел что-то другое, выведите в модальное окно текст "Ошибка ввода"
const LOST_WEIGHT_GOAL = 'Похудеть';
const MUSCLE_GOAL = 'Мышечная масса';
const STRENGTH_GOAL = 'Сила';
const TONUS_GOAL = 'Тонус';
const RELIEF_GOAL = 'Рельеф';
const LOST_WEIGHT_CREATING_PROGRAMM_MESSAGE = 'Составляю программу тренировок для похудения';
const MUSCLE_GOAL_CREATING_PROGRAMM_MESSAGE = 'Составляю программу тренировок для мышечной массы';
const STRENGTH_GOAL_CREATING_PROGRAMM_MESSAGE = 'Составляю программу тренировок для силы';
const TONUS_GOAL_CREATING_PROGRAMM_MESSAGE = 'Составляю программу тренировок для тонуса';
const RELIEF_GOAL_CREATING_PROGRAMM_MESSAGE = 'Составляю программу тренировок для рельефа';
const MODAL_TEXT = 'Цель тренировок';
const ERROR_TEXT = 'Ошибка ввода';

const userGoal = prompt(MODAL_TEXT);

switch (userGoal) {
    case LOST_WEIGHT_GOAL:
        alert(LOST_WEIGHT_CREATING_PROGRAMM_MESSAGE);
        break;
    case MUSCLE_GOAL:
        alert(MUSCLE_GOAL_CREATING_PROGRAMM_MESSAGE);
        break;
    case STRENGTH_GOAL:
        alert(STRENGTH_GOAL_CREATING_PROGRAMM_MESSAGE);
        break;
    case TONUS_GOAL:
        alert(TONUS_GOAL_CREATING_PROGRAMM_MESSAGE);
        break;
    case RELIEF_GOAL:
        alert(RELIEF_GOAL_CREATING_PROGRAMM_MESSAGE);
        break;

    default:
        alert(ERROR_TEXT);
        break;
}


// Задание 4
// Создаем приложение для проведение тестов по математике. Нужно попросить пользователя ввести 2 числа и спросить, 
// какой будет результат сложения чисел. Если ответ правильный, вывести в модальное окно "Правильно", если нет - "Неправильно".
const FIRST_NUMBER_REQUEST_TEXT = 'Введите первое число';
const SECOND_NUMBER_REQUEST_TEXT = 'Введите второе число';
const RESULT_REQUEST_TEXT = 'Результат сложения?'
const RIGHT_ANSWER_MESSAGE = 'Правильно!';
const WRONG_ANSWER_MESSAGE = 'Не правильно!';

const FIRST_NUMBER_INPUT = prompt(FIRST_NUMBER_REQUEST_TEXT);
const SECOND_NUMBER_INPUT = prompt(SECOND_NUMBER_REQUEST_TEXT);
const sumInput = prompt(RESULT_REQUEST_TEXT);

const FIRST_NUMBER = Number(FIRST_NUMBER_INPUT);
const SECOND_NUMBER = Number(SECOND_NUMBER_INPUT);
const sumProcessed = Number(sumInput);

const sum = FIRST_NUMBER + SECOND_NUMBER;

if (sum === sumProcessed) {
    alert(RIGHT_ANSWER_MESSAGE);
} else {
    alert(WRONG_ANSWER_MESSAGE);
}


// Задание 5
// Пользователь вводит в модальное окно число. Нужно определить, число четное или нечетное. Результат вывести на экран.
const REQUEST_NUMBER = 'Введите число';
const AN_EVEN_NUMBER_ANSWER = 'Число четное!';
const NOT_AN_EVEN_NUMBER_ANSWER = 'Число не четное!';

const input = prompt(REQUEST_NUMBER);
const inputProcessed = Number(input);

if (inputProcessed % 2 === 0) {
    alert(AN_EVEN_NUMBER_ANSWER);
} else {
    alert(NOT_AN_EVEN_NUMBER_ANSWER);
}

// Задание 6
// Пользователь вводит в модальное окно порядковый номер месяца. Нужно определить сезон (зима, весна, лето, осень). 
// Результат вывести на экран.
const MONTH_REQUEST_TEXT = 'Введите номер месяца';
const WINTER_SEASON_TEXT = 'Сейчас зима';
const SPRING_SEASON_TEXT = 'Сейчас весна';
const SUMMER_SEASON_TEXT = 'Сейчас лето';
const AUTUMN_SEASON_TEXT = 'Сейчас осень';
const ERROR_MESSAGE = 'Ошибка';

const month_input = prompt(MONTH_REQUEST_TEXT);

const month = Number(month_input);

switch (month) {
    case 12:
    case 1:
    case 2:
        alert(WINTER_SEASON_TEXT);
        break;

    case 3:
    case 4:
    case 5:
        alert(SPRING_SEASON_TEXT);
        break;

    case 6:
    case 7:
    case 8:
        alert(SUMMER_SEASON_TEXT);
        break;

    case 9:
    case 10:
    case 11:
        alert(AUTUMN_SEASON_TEXT);
        break;

    default:
        alert(ERROR_MESSAGE);
        break;
}