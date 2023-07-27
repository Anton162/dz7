//Задание 1
// for (let i = 0; i <= 10; i++) {
//   if (i === 0) {
//     console.log(`${i} - это ноль`);
//   } else if (i % 2 === 1) {
//     console.log(`${i} - нечетное число`);
//   } else {
//     console.log(`${i} - четное число`);
//   }
// }


//Задание 2
// const originalArray = [1, 2, 3, 4, 5, 6, 7];
// const newArray = originalArray.filter(item => item !== 4 && item !== 5);
// console.log(newArray);


//Задание 3
// const randomArray = [];
// for (let i = 0; i < 5; i++) {
//   const randomElement = Math.floor(Math.random() * 10); 
//   randomArray.push(randomElement);
// }
// console.log("Массив случайных чисел:", randomArray);
// const sum = randomArray.reduce((acc, curr) => acc + curr, 0);
// console.log("Сумма элементов массива:", sum);
// const minNumber = Math.min(...randomArray);
// console.log("Минимальное число в массиве:", minNumber);
// const includesNumber3 = randomArray.includes(3);
// console.log("Число 3 в массиве:", includesNumber3);

//Задание 4

// for (let i = 1; i <= 20; i++) {
//   const row = "x".repeat(i);
//   console.log(row);
// }