// Задание 5.
// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.


let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

console.log(arr.length) // Количество элементов


// 1 вариант - все элементы массива
console.log(arr) 


// 2 вариант - все элементы массива с индексами
for (let i = 0; i < arr.length; i++) {
    console.log(`item: ${arr[i]}, index: ${i}`);
  }

// короткая запись цикла for без индексов
for (let name of arr) {     
    console.log(name);
  }

// 3 вариант - все элементы массива с индексами
arr.forEach (function(item, index, array){
    console.log(`item: ${item}, index: ${index}`);
  })



