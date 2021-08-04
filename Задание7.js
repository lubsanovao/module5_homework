// Задание 7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, true, "два"];

let even = 0;
let odd = 0;
let nil = 0;
let other = 0;

for (let i = 0; i < arr.length; i++) {
  
  if (typeof arr[i] != 'number') {
    other = other + 1;
  } 
    else if (arr[i] === 0) {
    nil = nil + 1;
  } 
    else if (arr[i] % 2 === 0) {
    even = even + 1;
  } 
    else {
    odd = odd + 1;
  }
}

console.log(nil + ' - нулей')
console.log(even + ' - четных чисел')
console.log(odd + ' - нечетных чисел')
console.log(other + ' - прочих элементов')

console.log(arr.length)