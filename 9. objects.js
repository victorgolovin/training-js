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
    sayHello: function() {
        console.log(`Привет, Я - ${this.name}, мне ${this.age}`);
    }
}

me.sayHello();

console.log('------------------');

// Задание 2
// Создайте функцию createPerson(), которая возвращает объект с полями name, age. 
// Значения полей передаются в параметрах функции.

function createPerson(name, age) {
    return {
        name,
        age,
        sayName1: function() {
            console.log(this.name);
        }
    }
}

const RinaName1 = createPerson('Rina', 22);
console.log(RinaName1);


// Задание 3
// Создайте массив (7 элементов) из объектов person. 
// Используйте функцию из задания 2. Заполните объекты произвольными данными.

// Найдите самого старшего человека из массива. 
// В результате выведите в консоль фразу "{name} самый мудрый, ему {age}".



// function PersonARR(arr) {
//     const All_PERSON = ['Rina', 'Joe', 'Victor', 'Stiv', 'Rebbeka', 'Steffan', 'Rae'];

//     for (let i = 0; i < arr.length; i++) {
//         if (createPerson >= this.age) continue;

//         All_PERSON.push(arr[i]);
//     }

//     return All_PERSON;
// }

// const NameRina = createPerson('Rina', 22);
// const NameJoe = createPerson('Joe', 34);
// const NameVictor = createPerson('Victor', 30);
// const NameStiv = createPerson('Stiv', 31);
// const NameRebbeka = createPerson('Rebbeka', 35);
// const NameSteffan = createPerson('Steffan', 33);
// const NameRae = createPerson('Rae', 39);

// function createPerson(name, age) {
//     return {
//         name,
//         age,
//         sayName1: function() {
//             console.log(this.name);
//         }
//     }
// }

// console.log(PersonARR());

// Задания 4
// Создайте объект, в котором ключи - дни недели (числа 1 - 7), 
// а значения - название дня (понедельник - воскресенье).

// Напишите программу, которая просит пользователя ввести порядковый номер дня и выводит название дня по номеру. 
// Например, пользователь ввел 1, выводим "понедельник".

const DAY_WEEKS = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
    SayDayWeek: function() {
        if (this)
        return prompt('Введите день недели');
    }
}



DAY_WEEKS.SayDayWeek()

// Задание 5
// Напишите программу, которая просит пользователя ввести порядковый номер месяца и выводит, 
// какой это сезон (зима, весна, лето, осень). Используйте подход из задания 4.


// Задание 6
// На главной странице сайта Avito https://www.avito.ru/ есть блок сториз:


// Опишите массив из объектов, который хранит в себе данные для отрисовки такого блока. 

// Для того, чтобы определить ссылку на изображение зайдите на Avito, 
// откройте Dev Chrome Tools (вкладка Elements), найдите в html разметки нужный элемент и скопируйте свойство src.