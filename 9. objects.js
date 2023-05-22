// Обьявление обьекта
// 1. let
// 2. const

let me2 = { // обьект
    name: 'Victor', //описывает "ключ значения" , ключ - название например name, а значение 'Victor'
    age: 29,
    isAdult: true,
    heith: 185,
};

me2 = { // Можно перезаписывать обьекты как переменные
    surename: 'Golovin' 
};

console.log(me2);

// или

const me1 = { // мы можем в САМОМ обьекте поменять значение свойста или ключа
    name: 'Victor',
    age: 29,
    isAdult: true,
    heith: 185,
}

me1.age = 35;

console.log(me1);

// Свойства обьекта
// Обращение к свойству обьекта

console.log(me1.heith); // первый способ через точку обращаться к конкретному свойсту
console.log(me1['name']); // второй спопос через квадратные скобки и ковычки

let myName = 'name'; // но если мы запишим свойство обьекта как переменную она все равно выведит свойста из обьекта

console.log(me1[myName]);


// Методы обьекта
// Доступ к свойствам обьекта в методах
const ADULT_AGE = 18;
const person = {
    name: 'Joe',
    age: 29,
    isAdult: function() {
        return this.age > ADULT_AGE; // this - позволяет на обратится к свойству внутри метода
    },
    say: function(message) {    // можем написать функцию в обьекте
        console.log(`${message} ${this.name}`); // this - позволяет на обратится к свойству внутри метода
    }
}

person.say('Hello!'); // а затем обратся к ней
person.say('Bye!');

console.log(person.isAdult());


// Возврат обьекта из функции
function createPerson(name, age) {
    return {
        name, // мы можем из функции возвращать обьекты
        age,
        sayName: function() {
            console.log(this.name);
        }
    }
}

const newPersone = createPerson('Victor', 29);
const Rina1 = createPerson('Rina', 22);



console.log(newPersone);

// Перебор свойства обьекта for in

for (const key in Rina1) {
    console.log(key); // Позволяет узнать какие ключи находятся в обьекте
}

console.log('------------------');

// Задание 1
// Создайте объект me c полями name, age. 
// Добавьте объекту метод sayHello, который выводит в консоль фразу: "Привет, Я - {name}, мне {age}".

const me = {
    name: 'Rina',
    age: 22,
    BiuldHelloText: function() { // Добовляем метод (метод это функция внутри обьекта), делаем функции независимой
        return `Привет, Я - ${this.name}, мне ${this.age}`; // Возвращаем метод
    }
}

console.log(me.BiuldHelloText());

console.log('------------------');

// Задание 2
// Создайте функцию createPerson(), которая возвращает объект с полями name, age. 
// Значения полей передаются в параметрах функции.

function createPerson({name, age}) { //  Создаем функции в которую передается обьект человека name и age
    return {
        name,
        age,
        getName: function() { // К свойствам обьекта лучше обращаться через функции
            return this.name
        },
        getAge: function() {
            return this.age
        },
        BiuldHelloText: function() {
            return `Привет, Я - ${this.getName()}, мне ${this.getAge()}`; // обращаемся к функция через this
        }
    }
}

const RinaName1 = createPerson({ // Создаем функцию в которой мы через обьект ее настраиваем
    name: 'Rina',
    age: 22
});

console.log(RinaName1.BiuldHelloText());

console.log('------------------');

// Задание 3
// Создайте массив (7 элементов) из объектов person. 
// Используйте функцию из задания 2. Заполните объекты произвольными данными.

// Найдите самого старшего человека из массива. 
// В результате выведите в консоль фразу "{name} самый мудрый, ему {age}".

function biuldText ({ name, age }) {
    return `${name} самый мудрый, ему ${age}`;  
}

function getMaxAgeIndex(people) { // Функция принимает в себя массив people в котором она выполняет код поиска самого мудрого человека
    let index = 0; // Создаем переменную с которой мы будем проверять index в массиве
    let maxAge = people[0].getAge(); // обращаепся к массиву, getAge() берем из обьекта createPerson()

    for (let i = 0; i < people.length; i++) {
        if (people[i].getAge() <= maxAge ) continue; // сравниваем массив [i] 

        maxAge = people[i].getAge();
        index = i; 

    }

    return index;
}

const people = [ // Массив из обьектов
    createPerson({ name: 'Rina', age: 22 }), // createPerson() функцию берез из 2 задания
    createPerson({ name: 'Sasha', age: 25 }), // обязательно указываем как обьект в кгруглых скобках
    createPerson({ name: 'Rin', age: 29 }),
    createPerson({ name: 'Victor', age: 234 }),
    createPerson({ name: 'Bill', age: 20 }),
    createPerson({ name: 'Rae', age: 33 }),
    createPerson({ name: 'Diana', age: 35 }),
];

const maxAgeIndex = getMaxAgeIndex(people);


console.log(biuldText({
    name: people[maxAgeIndex].getName(),
    age: people[maxAgeIndex].getAge(),
}));

console.log('------------------');

// Задания 4
// Создайте объект, в котором ключи - дни недели (числа 1 - 7), 
// а значения - название дня (понедельник - воскресенье).

// Напишите программу, которая просит пользователя ввести порядковый номер дня и выводит название дня по номеру. 
// Например, пользователь ввел 1, выводим "понедельник".

function getDayIdFromUser() { // называем функцию по смыслу (получаем id от пользователя)
    const input = prompt('Введите номер дня недели'); // внутри функция забирает работу с инпутом
    return Number(input); // а затем отдает ее 
}

const DAY_WEEKS_BY_ID = { // Создаем обьект в котором ключи это порядковый номер, а значение названия дня недели
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
};

const dayId = getDayIdFromUser(); // смысл dayId, что мы данные получаем из getDayIdFromUser(), в которой мы уже описали логику

console.log(DAY_WEEKS_BY_ID[dayId]); // В такой записи мы можем обратится к обьекту через константу в квадраных скобках

console.log('------------------');

// Задание 5
// Напишите программу, которая просит пользователя ввести порядковый номер месяца и выводит, 
// какой это сезон (зима, весна, лето, осень). Используйте подход из задания 4.

const MONTH_ERROR = 'Такого месяца нет';
const MONTH_REQUEST_TEXT = 'Введите номер месяца';

function getMonthIdFromUser() {
    const inputMonth = prompt(MONTH_REQUEST_TEXT);
    return Number(inputMonth);
}

function getMonthTitle(id) { // создаем функция которая получает id месяца
    if (!SEASON_BY_MONTH[id]) { // создаем условие что если юзер ввел другой номер(не месяца)
        return MONTH_ERROR; // возвращает сообщение 
    }                               // если юзер ввел все правильно

    return SEASON_BY_MONTH[id]; // возвращаем функцию с id
}

const WINTER = 'Winter';
const SPRING = 'Spring';
const SUMMER = 'Summer';
const AUTUMN = 'Autumn';

const SEASON_BY_MONTH = {
    12: WINTER,
    1: WINTER,
    2: WINTER,
    3: SPRING,
    4: SPRING,
    5: SPRING,
    6: SUMMER,
    7: SUMMER,
    8: SUMMER,
    9: AUTUMN,
    10: AUTUMN,
    11: AUTUMN,
}
  

const MonthId = getMonthIdFromUser();
console.log(getMonthTitle(MonthId));

console.log('------------------');

// Задание 6
// На главной странице сайта Avito https://www.avito.ru/ есть блок сториз:


// Опишите массив из объектов, который хранит в себе данные для отрисовки такого блока. 

// Для того, чтобы определить ссылку на изображение зайдите на Avito, 
// откройте Dev Chrome Tools (вкладка Elements), найдите в html разметки нужный элемент и скопируйте свойство src.

function createStory( {title, imgSrc, isViewed} ) { // 2. Создаем функцию в оторой будет обьект с титулом, ссылкой и статусом
    return {
        title,
        imgSrc,
        isViewed,
    }
}


const stories = [ // 1. Обьявляем массив сторис
    createStory({
        title: 'Путишествие с детьми', 
        imgSrc: 'https://cover.imglib.info/uploads/cover/lore-olympus-/cover/kNqbn3qDopG0_250x350.jpg',
        isViewed: true
    }),
    createStory({
        title: 'Вакансии без опыта', 
        imgSrc: 'https://cover.imglib.info/uploads/cover/lore-olympus-/cover/kNqbn3qDopG0_250x350.jpg',
        isViewed: false
    }),
    createStory({
        title: 'Авито строит дом', 
        imgSrc: 'https://cover.imglib.info/uploads/cover/lore-olympus-/cover/kNqbn3qDopG0_250x350.jpg',
        isViewed: false
    })
];

console.log(stories);