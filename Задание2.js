// Задание 2.
// Дана переменная Х, которая может принимать любое значение. 
// Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».


// 1 вариант
let x;

if (typeof x === 'number') {
  console.log('x - число');
}
  else if (typeof x === 'string') {
    console.log('x - строка');
}
  else if (typeof x === 'boolean') {
    console.log('x - булево значение');
}
  else {
    console.log('x - не определен');
}


// 2 вариант
let x;

switch (typeof x) {
    case 'number':
        console.log('x - число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    case 'boolean':
        console.log('x - булево значение');
        break;
    default:
        console.log('x - не определен');
        break;
}