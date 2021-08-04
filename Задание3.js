// Задание 3.
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".



// первый способ
let string = 'Hello'
let massiv = [...string]

massiv = massiv.reverse().join('');

console.log(massiv)



// второй способ
let line = 'Hello'

line = line.split('');

line = line.reverse();

line = line.join('');

console.log(line)