
// задание 1
let admin;
let name  = 'Джон';
admin = name;
alert(admin);


// задание 2

let cityName, cityEarn, cityPeople, cityAge, nowYear;
cityName = prompt('Укажите название города', 'Значение города неизвестно');
cityEarn = prompt('Укажите год образования города', 'Значение года основания неизвестно');
cityPeople = prompt('Укажите население города', 'Значение населения города неизвестно');

nowYear = new Date().getFullYear();; 
cityAge = nowYear - cityEarn;

alert(`Городу ${cityName} исполнилось ${cityAge} лет с момента его образования. Население - ${cityPeople} человек`);


// задание 3

let pi, radiusCircle, squareCircle;
radiusCircle = prompt('Укажите радиус круга', 'Значение радисуса круга - неизвестно');
pi = 3.14;
squareCircle = pi * Math.pow(radiusCircle, 2);
alert(`Площадь круга с радиусом ${radiusCircle} равна ${squareCircle}`);



// задание 4

num1 = prompt('Введите первое число', null);
num2 = prompt('Введите второе число', null);

alert(`Сумма равна: ${parseInt(num1) + parseInt(num2)}, Разность равна: ${num1 - num2}, Произведение равно: ${num1 * num2}, Частное равно: ${num1 / num2}`);