// // // Number - цілі числа і числа з плавачою крапкою

// newFunction()

// function newFunction() {
// 	const age = 20
// 	const point = 15.8

// 	// String - рядки, послідвність з нуля або більше символів.
// 	// Рядок починаеться і закінчуеться одинарними ', або подвійними лапками "".
// 	// const username = "Mango";
// 	const description = 'JavaScript для початківців'

// 	// true -вірно
// 	// false -ні
// 	// Зверніть увагу на імена змінних, що містять буль. Вони ставлять запитання
// 	// і відповідь на нього так або ні
// 	const isLoggedin = true
// 	const canMerge = false
// 	const hasChildren = true
// 	const isModalOpen = false
// 	//  null - особливе значення яке по суті означає ніщо
// 	//  Використовуеться в тих ситуаціях коли необхідно взяти порожнечу
// 	//  Наприклад якщо користувач нікого не вибирав то можна сказати що значення null
// 	let selectedProduct = null

// 	// undefined - ще одне спеціальне значення.
// 	// За замовчуванням, коли змінна оголошуеться алне не ініцилізуеться, іі значення не визначено,
// 	// 	Їй присвоюеться undefined
// 	let username
// 	console.log(username) // undefined

// 	// Оператор typeof
// 	console.log(typeof username) // undefined
// 	console.log(typeof isLoggedIn) // boolean
// 	console.log(typeof description) //іtring

// 	//Взваємодія з користувачем
// 	console.log(description)
// 	// alert(descripton);
// 	//Отримання даних
// 	//const years = confirm("Тобі є 18 років ?");
// 	//console.log(years);
// 	//const years = prompt("Тобі є 18 років ?");
// 	// console.log(years);
// 	// Оператори порівнняня
// 	// a > b і a < b - більше/менше
// 	// a >= b і a <= b - більше/менше або дорівнює
// 	// a == b - рівність
// 	// a != b нерівність
// 	// a === b - строга рівність
// 	// a !== b - строга нерівність
// 	// const valueA = "5";
// 	// console.log(Number(valueA));
// 	// console.log(typeof Number(valueA));
// 	// const valueB = "random string";
// 	// console.log(Number(valueB));
// 	// console.log(typeof Number(valueB));
// 	// Методи Number.perseInt() і Number.perseFloat()
// 	// console.log(Number.perseInt("10px"));
// 	// console.log(Number.perseInt("12wer43"));
// 	// console.log(Number.perseInt('12.46qwe79'))
// 	// console.log(Number.perseInt('weww'))
// 	// Методи Number.perseFloat() персить з рядка дробове число
// 	// console.log(Number.perseFloat('10px'))
// 	// console.log(Number.perseFloat('12wer43'))
// 	// console.log(Number.perseFloat('12.46qwe79'))
// 	// console.log(Number.perseFloat('weww'))
// 	// Перевірка на число
// 	// Number.isNaN(value)
// 	// const validNum = Number("51")
// 	// console.log(Number.isNaN(validNum))
// 	// const invalidNum = Number('wewer')
// 	// console.log(Number.isNaN(invalidNum))
// 	// Клас Math
// 	// console.log(Math.floor(1.7)); //повертає найменше ціле число
// 	// console.log(Math.ceil(1.2));//повертає найбільше ціле число
// 	// console.log(Math.round(1.2));
// 	// console.log(Math.round(1.5));//повертає значення числа заокругленого до найближчого числа
// 	// console.log(Math.max(20, 10, 50, 40));//повертає найбільше ціле число з набору
// 	// console.log(Math.min(20, 10, 50, 40));//повертає найменьше ціле число з набору
// 	// console.log(Math.random());//повертає псевдовипадкове число в діапазоні від 0  до 1
// 	// console.log(Math.pow(2,4));//підносить число до степені
// 	// const randomNum = 0.6724762371982549;
// 	// console.log(randomNum);
// 	// const nuum = randomNum * 10;
// 	// console.log(Math.round(nuum));
// 	// const randomNum = Math.round(Math.random() * (10 - 1) + 1)
// 	// console.log(randomNum);
// 	// const username = "user"
// 	// const message = "Banana" + "yellow" + "fruit"
// 	// console.log(message)
// 	// console info = 1 + 4 + "2";
// 	// console.log(typeof info);
// 	// console.log(info);
// 	// const boy = "Ivan"
// 	// console.log(`привіт мене звати ${boy}`)
// 	console.log(boy.lenght) //повертає довжину

// 	// Методи toLowerCase() і toUpperCase()
// 	console.log(boy.toLowerCase())
// 	console.log(boy.toUpperCase())

// 	const jsFileName = "script.js"
// 	// Методи endsWith()
// 	console.log(jsFileName.endsWith(".js"))

// 	// Методи replace() і replaceAll()
// 	const minFileJs = jsFileName.replace(".js", ".min.js")
// 	console.log(minFileJs)

// 	const cssNames = "style.css,  about.css, portfolio.css,"
// 	const minCss = cssNames.replaceAll(".css", ".min.css")
// 	console.log(minCss)
// }
// var numbers [];
// for (var i = 1; i <= 10; i++) {
// 	Numbers.push(i);
// }
// console.log(numbers);

// if (true) {
// 	console.log('true')
// } else {
// 	console.log('false')
// }
// {
// 		//*	<умова> ? <вираз якщо умова правдива>:<вираз якщо хибна>*/
// }
// true ? console.log("true") : console.log("false");

// const num1 = 10;
// const num2 = 20;

// const biggerNumber = num1> num2 ? num1 : num2;
// console.log(biggerNumber)

// const global = 'global'

// if (true) {
// 	const blockA = "blockA";

// 	console.log(global);
// 	console.log(blockA);

// 	console.log(blockB);
// 	console.log(blockc);

// 	if (true){
// 		const blockB = "blockB"
// 		console.log(global);
// 		console.log(blockA);
// 		console.log(blockB);
// 	}

// }
// if (true){
// 		const blockC = "blockC"
// 		console.log(global);
// 		console.log(blockA);
// 		console.log(blockB);
// 		console.log(blockC);

// 	}
// // if (condition) {

// // }

// // if (true) {
// //   console.log("true");
// // } else {
// //   console.log("false");
// // }

// {
//   /* <умова> ? <вираз якщо умова правдива>:<вираз якщо хибна> */
// Тернарний оператор це скорочений вираз if else
// }
// // true ? console.log("true") : console.log("false");

// // const num1 = 10;
// // const num2 = 20;

// // const biggerNumber = num1 > num2 ? num1 : num2;
// // console.log(biggerNumber);

// // if (true) {
// //   const value = 5;
// //   console.log("Block scope:", value);
// // }

// // console.log("Global scope:", value);

// const global = "global";

// if (true) {
//   const blockA = "blockA";

//   console.log(global); // 'global'
//   console.log(blockA); // 'blockA'

//   console.log(blockB); // ReferenceError
//   console.log(blockC); // ReferenceError

//   if (true) {
//     const blockB = "blockB";
//     console.log(global); // 'global'
//     console.log(blockA); // 'blockA'
//     console.log(blockB); // 'blockB'
//   }
// }

// if (true) {
//   const blockC = "blockC";
//   console.log(global); // 'global'
//   console.log(blockA); // ReferenceError
//   console.log(blockB); // ReferenceError
//   console.log(blockC); // 'blockC'
// }

// while (condition) { //цикл while
//   //код, тіло циклу.
// }

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter = +1;
// }

// let password = "";
// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// const num = 3;

// for (let i = 0; i <= 5; i++) {
//   console.log(i);

//   if (i === num) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const array =[];
// const clients = ["Audi", "BMW", "Toyota"];
// console.log(clients[0]);
// console.log(clients.length);

// for (let i = 0; i < clients.length; i++) {
// 	console.log(clients[i]);
// }

// var fruits = ["Яблуко", "Банан", "Апельсин ", "Груша", "Персик"];

// for (var i =0; i < fruits.length; i++) {
// 	console.log(i + 1 + "№." + fruits[1]);
// }

//Методи масиву

// Методи split(delimiter) перетворює рядок в масив, "розбиваючи" його роздільником delimiter.
// Якщо роздільник - це порожній рядок, то створиться масив окремих символів.
// Роздільником може один або декілька символів.

// const names = "Yaroslav";
// console.log(names.split(""))
// const sentence = "Java Script - це цікаво ";
// console.log(sentence.split(" "))

//Методи масивів join(delimiter) об'єднує елементи масиву у рядок.
// У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.
// Тобто ця операція протилежна методу рядків split(delimiter).

// const words = ["JavaScript", "-", "це", "цікаво"];
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("_"));

// for (var i = 2; i <=50; i +=2) {
// 	console.log(i);
// }

//indes(value) - перевіряє чи містить масив елемент зі значенням value
// const clients = ["Ivan", "Gregory", "Olga", "Ted"];

// console.log(clients.includes("Olga"));

//Метод push(value) додає один або декілька елементів наприкінці масиву, без необхідності зазначати індекси елементів, що додаються
// Повертає довжину масиву після додавання елментів.
// console.log(clients);
// clients.push("Yar");
// console.log(clients);
// clients.push(22222);;
// console.log(clients);

//Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
//Якщо масив порожній, метод повертає underfined.

// clients.pop();
// console.log(clients);
// clients(pop);
// console.log(clients);

//Метод concat() використовується для об`єднання двох або більше масивів створюючи новий масив який містить елементи з усіх вихідних масивів
// let array = []
// for (let i = 0; i <10; i++) {
// 	const random = Math.ceil(Math.random() * 900 + 100);
// 	array.push(random);
// }
// let sumArray = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		sumArray += array[i];

// 	}
// console.log(array);\
// console.log(sumArray)

// function declaration (){
// 		console.log('Це декларативна функція')
// }

// function foo(a, b, c,) {
// 	console.log(a * b *c)
// };
// foo(2, 3, 4)
// foo(2, 6, 4)

// function calc(a,b) {
// 	console.log(a + b);
// 	return a + b;
// 	console.log(a + b)
// }

// console.log("Лог до виклику");

// calc(2,2);
// console.log("лог після виклику")
// calc();
// calc(10);

// const expression = function (a,b){
// 	return a-b;
// }

// console.log(expression(3, 2));

// const globalValue = 10; // зміна з глобальною видимістю
// console.log(globalValue);
// function calc(a = 2) {
// 	const b = 20; // змінна з локальною видимістю не можна використовувати в локальні
// 	return a * b +globalValue
// }
// console.log(calc());
// console.log(b);

// function add(a, b) {
// 	return 2 + 4
// }
// console.log(2 + 4)

// function divide(a, b) {
// 	return 5 / 6
// }
// console.log(5 / 6)

// function subtract(a, b) {
//   return a          - b;
// }

// function calc4(a, b) {
// 	return a * b

// }

// const expression = function (a, b) {
//   return a - b;
// };

// console.log(expression(3, 2));

// const globalValue = 10; // змінна з глобальною видимістю
// console.log(globalValue);
// function calc(a = 2) {
//   const b = 20; // змінна з локальною видимістю не можна використовувати в глобальні
//   return a * b + globalValue;
// }
// console.log(calc());
// console.log(b);

// {
// }

// function bancomat(amount, balance) {
//   if (amount === 0) {
//     console.log("Для знаяття готівки вкажіть суму більшу за 0!");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція проведена успішно");
// }

// bancomat(0, 300);
// bancomat(500, 300);
// bancomat(100, 300);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   location: {
//     country: "Jamaica",
//   },
//   isPublic: true,
//   rating: 8.38,
//   sayHello: function () {
//     console.log("hello world");
//   },
// };
// console.log(book.rating);
// book.sayHello();

// //деструктуризація !!!
// const { title, author, rating } = book;

// console.log(title, author, rating);

// const arr = [
//   { id: 1, name: "Gregory" },
//   { id: 2, name: "Yaroslav" },
//   { id: 3, name: "Sasha" },
//   { id: 4, name: "Liza" },
// ];
// spread оператор
// const books = [{ ...book }, { ...book }];
// console.log(books);
// const dubl = [...books, ...books];
// console.log(dubl);

// function foo(name) {
// 	return `Ласкаво просимо ${name}`;
// }

// console.log(foo{"Ivan"});
// console.log(foo);

// callback - функція яка передаєть іншій функції як аргумент, а та в свою чергу, викликає передану функцію.
// higher order function - функція, яка прймає у якості параметрів інші функції або повертає функцію у якості результату

// function greet (name) {
// 	//calback
// 	console.log(`Ласкаво просимо ${name}`)
// }

// function registerGuest(name, callback) {
// 	//higher order function
// 	console.log(`Реєструю гостя ${name}`);
// 	callback{name};
// }

// registerGuest("Іван", greet);

//масив .forEach(fuction callback (element, index, array)){
//тіло колбек функції
//}

// - Поелментно перебираю масив
// - Викликає колбек для кожного елементу масиву
// - Нічого не повертає

// const numbers = [5, 10, 15, 20, 25]
// for (const iterator of numbers) {
// 	console.log(iterator)
// }

// // for(let i =0; i < numbers.length; i++) {
// // 	console.log(`Індекс ${i}`, значення `${number[i]}`);
// // }

// // numbers.forEach(function (number, index) {
// // 	console.log(`Індекс ${index}`, значення `${number}`);
// // });
// numbers.forEach((number, index) => {
// 	console.log(`Індекс ${index}, значення ${number}`)
// })

// let randomNumbers = [1, 2, 3, 4, 5]

// randomNumbers.forEach(function(number){
// 	let plus = number * number
// 	console.log(plus)
// });
// function sum(a, b = 3) {

// 	return a + b

// }
// console.log(sum(7, ))
// let pc = {
// 	name: "PC",
// 	age: "3",
// 	city: "Vinnitsa"
// };

// let pc = { name: "PC", age: 46};
// let { name, age } = pc;

// Стрілочні функції- мають скорочений синтаксис, що зменшує обсяг коду особливо коли функція маленька або якщо вона використовується як callback. Усі стрілки створюються як функціональний вираз, якщо функція не анонімна її необхідно приствоювати змінній.
// let arrow = ()  => {

// };

// Імперативне та декларативне програмування
// Імперативне- описує процес обчислення у вигляді задної послідовності, інструкції що змінють стан програми, це опис того як щосб виконуєть
// // Декларативне програмування- описує тещо ми хочемо отримати у підсумку а не спосіб це зробити
// Функція з side ефектами- це функція яка в процесі виконання може змінюватись, змінювати або використовувати глобальні змінні зміннювати значення аргументів посилального типу
// Чиста функція- це функція результат якої залежить тільки від значенння перданих аргументтів за умови однакових аргументів вона завжди повертає один і той самий результат і немає побічних ефектів тобто не змінює значення аргументів

//  const ar = [1, 2, 3, 4, 5] // - масив
// //  Array.method((item, index, array) => {
// // // Логіка яка буде застосовуватися на кожній ітерації
// //  })
//  ar.forEach((item) => {
//  console.log(item)
//  })
//   ar.forEach((banana, index) => {
// 		console.log(banana + 1, index);
// 	})

// map- Другий метод перебору масиву. Перебирає оригінальний масив не змінює оригінальний масив, результат callback функції записується в новий масив, повертає масив
//flatMap-це аналогічний метод map але застосовується увипадках коли результат це багато вимірний масив, який нееобхідно розгладити
// const planets = ["земля", "марс", "венера", "юпітер"]

// const planetsUpperCase = planets.map((planet) =>
//  planet.toUpperCase()
// )
// console.log(planets)
// console.log(planetsUpperCase)

// const students = [
// 	{
// 		name: "Hiuston",
// 		score: 90
// 	},	{
// 		name: "Grigoriy",
// 		score: 4.5
// 	},	{
// 		name: " Hary Kane",
// 		score: 91
// 	},	{
// 		name: "Barbie",
// 		score: 100
// 	},	{
// 		name: "Antonio Rudiger",
// 		score: 86
// 	},	{
// 		name: "Reece Games",
// 		score: 86
// 	},
// ]

// //  Array.method((index, array, item) => {
// let totalScore = 0
// //  })
// students.forEach((item) => {
// 	totalScore += item.score;
// })

// console.log(totalScore);

// const name = students.map(item => {
// 	return item.name
// })
// console.log(name)
// students.map((item) => {
// 	console.log(item.name.score)
// })

// function grigory(a, b) {
// 	return a + b
// }

// const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW']
// for (const car of cars) {
// 	console.log
// }

// let grigory =[1 , 2]
// let grigory1= grigory[0]
// console.log(grigory1)

// const fruits = "Mango"
// console.log(fruits.split(""))
// function foo(name) {
// 	console.log(`Привіт ${name}`)
// }
// function grigory(apple, callback) {
// 	console.log(`Яблуко смачне ${apple}`)
// 	callback(apple)
// }
// grigory("Григорій", foo )

// const car = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW']
// car.forEach((item, index, array) => {
// 	console.log('item :', item.toUpperCase())
// 	// console.log('index :', index)
// 	// console.log('array :', array)
// })
// const students = [
// 	{ name: 'Манго', courses: ['математика', 'фізика'] },
// 	{ name: 'Полі', courses: ['інформатика', 'математика'] },
// 	{ name: 'Ківі', courses: ['фізика', 'біологія'] },
// ]

// const studentsCourse = student.map(student => student.Course ) 
// console.log(student.Course)
 
// Метод filter- не змінює оригінальний масив, поелементно перебирає оригінальний масив, повертає новий масив, додає у масив, що повертається, елементи які задовільняють умови callback функції

//масив.filter((element, index aaray) => {
	//Тіло колбек функції
//})


// const values = [51, -3, 27, -68, 42, -37]
// const positiveValue = values.filter(value => value >= 0)
// console.log(positiveValue)


// Метод indexOf()повертає перший індекс, яким даний елемент може бути знайдений в масиві або -1, якщо такого індексу немає.

// Метод find()повертає значення першого знайденого в масиві елемента, яке задовольняє умову, переданої в callback функції. В іншому випадку повертається undefined.

// Метод reduce()виконує функцію callback один раз для кожного елемента, наявного в масиві, за рахунок пустот, використовуючи чотири аргументи: початкове значення (або значення від попереднього виклику callback), значення поточного елемента, поточний індекс і масив, за яким відбувається ітерація, застосовує функцію редуктора до кожного елемента масиву (слева-направо), повертаючи одне результируюче значення.

//  const students = [
// 	{ name: 'Манго', courses: ['математика', 'фізика'] },
// 	{ name: 'Полі', courses: ['інформатика', 'математика'] },
//  	{ name: 'Ківі', courses: ['фізика', 'біологія'] },
//  ]

//  const totalScore = students.reduce((prevValue, student) => {
// 	return prevValue + student.score;
//  }, 0);

// console.log(totalScore);

// const averageScore = totalScore / students.legth
// console.log(averageScore)

// const computers = {
// 	processor: 'Ryzen5',
// 	motherboard: 'B450',
// 	ozu:'HyperX Predator'
// }
// const {processor, motherboard, ozu} = computers;

//Dom()- незалежний від мови програмування інтерфейс, для робити з html документом
// document.querySelector("selector")
//selector-тег або клас
// const button = document.querySelector(".btn")
// console.log(button)
// const li = document.querySelectorAll(".item")
// console.log(li)
// const img = document.querySelector(".img")
// console.log(img)
// console.log(img.src)
// const div = document.querySelector(".box")
// console.log(div.textContent)
// div.classList.add("active")
//classList.add()-дод      ає клас до списку класів елемента
//lassList.remove()-видаляє клас зі списку класів елемента
// div.classList.remove('active')
// div.classList.toogle('active')
//classList.toogle()- перевіряє якщо клас відсутній то додає, якщо присутній то видаляє
// div.classList.contains('active')
//classList.contains()- повертає True or False залежно від наявності елемента
// const text = document.querySelector(".text");
// console.log(text);

// text.style.backgroundColor = "teal";
// text.style.fontSize = "30px";

// console.log(text.style);  
//textContent - додає текст
// const body = document.querySelector("body")


// const blue = document.createElement("div");
// blue.textContent = "Синій блок";
// blue.style.backgroundColor = "blue";
// body.append(blue);

// const green = document.createElement("div")
// green.textContent = "Зелений блок";
// green.style.backgroundColor = "green";
// body.append(green)

// const red = document.createElement('div')
// red.textContent = 'Зелений блок'
// red.style.backgroundColor = 'red'
// body.append(red)

// const fruitsArray = [
// 	{ name: 'Apple', color: 'Red', taste: 'Sweet' },
// 	{ name: 'Banana', color: 'Yellow', taste: 'Sweet' },
// 	{ name: 'Orange', color: 'Orange', taste: 'Citrusy' },
// 	{ name: 'Grapes', color: 'Purple', taste: 'Sweet' },
// 	{ name: 'Strawberry', color: 'Red', taste: 'Sweet' },
// 	{ name: 'Kiwi', color: 'Brown', taste: 'Tart' },
// 	{ name: 'Mango', color: 'Orange', taste: 'Sweet' },
// 	{ name: 'Pineapple', color: 'Yellow', taste: 'Tangy' },
// 	{ name: 'Watermelon', color: 'Green', taste: 'Juicy' },
// 	{ name: 'Peach', color: 'Orange', taste: 'Sweet' },
// ]

// const newFruits = fruitsArray.map(item => {
// 	const color = item.color.toLowerCase()
// 	console.log(color)
// 	return `
//   <li style="background-color: ${color};">
//   <p>Name : ${item.name}</p> 
//   <p>Color : ${item.color}</p>
//   <p>Taste : ${item.taste}</p>
//   </li>
//   `
// })
// console.log(newFruits.join(''))
// box.innerHTML = newFruits.join('')


// Подія- це сигнал від браузера про те що на веб сторінці щось відбувалося.
//addEventListener(Event,Hendler,Option)- приймає три парматетри
//Event-імя події, це завжди рядок наприклад "click"
//Hendler- callback функція яка буде виконана під час події
//Option- необовязковий обєкт парметрів з розшириними налаштуваннями

// const button = document.querySelector('.btn')
// button.addEventListener("click",(event) => {
// event.preventDefault()
// console.log(`Ми натиснули на кнопку`)
// console.log(event)
// console.log(event.type)
// console.log(event.currentTarget)

// })
//Mouse down,Mouse up, click, dblclick,Mousemove,focus,blur,input,change,keydown,keyup
//Метод preventDefault - скасовує дію браузера за замовчуванням

// document.addEventListener("keydown",(event) => {
// console.log("key",event.key)
// console.log("код",event.code)

// })
// const body = document.querySelector('body')

// const div = document.createElement("div");
// console.log(div)
// div.style.width = "500px";
// div.style.height = "500px";
// body.append(div)
// document.addEventListener("keydown", (event) => {
// 	console.log(event.code)
// if (event.code === "KeyW") {
// 	div.style.backgroundColor = "white";
// } else if (event.code === "KeyR") {
// 	div.style.backgroundColor = "red";

// } else if (event.code === "KeyY"){
// 	div.style.backgroundColor = "yellow";
// } else if (event.code === "KeyB") {
// 	div.style.backgroundColor = "black";
// } else if (event.code === "KeyP") {
// 	div.style.backgroundColor = "purple";
// }
// })





