// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let myMap = new Map();

myMap.set(1, 'white');
myMap.set(2, 'black');
myMap.set(3, 'red');
myMap.set(4, 'green');
myMap.set(5, 'blue');
myMap.set(6, 'yellow');

console.log(myMap)
console.log(myMap.keys())
console.log(myMap.values())

// 1 вариант
for (let double of myMap) {
    console.log(`Ключ - ${double[0]}, значение - ${double[1]}`);
}

// 2 вариант
myMap.forEach(function(value,key) {
    console.log(`Ключ - ${key}, значение - ${value}`);
  })
  