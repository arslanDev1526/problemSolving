// (11)  count the duplicate in array

// let arr = [1, 2, 3, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5];

// let countDuplicate = (arr) => {
//   let count = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (count[arr[i]]) {
//       count[arr[i]]++;
//     } else {
//       count[arr[i]] = 1;
//     }
//   }

//   return count;
// };
// console.log("countDuplicate", countDuplicate(arr));

// with forEach()

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = {};

// arr.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });

//  👇️ {one: 3, two: 2, three: 1}
// console.log(count);

// (12) fint the sum of array

// let arr = [1,2,3,4,5,6,7,8,9,10,11,11,11,11,11];

// let sumOfArray = (arr) => {
//     let count = 0;
// for(let i = 0; i < arr.length; i++){
//      count = count + arr[i];
// }

// return count;
// }

// console.log(sumOfArray(arr));

// with reduce

// let reduced = arr.reduce((acc,val) => acc + val,0);
// console.log(reduced);

// Promise example

// const promise = (num) => {
//   return new Promise((resolve, reject) => {
//     if (typeof num !== "number") {
//       reject("inValid input number");
//     } else if (num % 2 === 0) {
//       resolve("even");
//     } else {
//       resolve("odd");
//     }
//   });
// };
// promise("hello")
// .then(result => console.log(result))
// .catch(err => console.error(err));



