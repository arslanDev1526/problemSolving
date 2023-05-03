//  (1)  problem: arrange the array in ascending order by loop

// let arry = [2, 4, 6, 8, 2];

// for (let i = 0; i < arry.length; i++) {
//   for (let j = i + 1; j < arry.length; j++) {
//     if (arry[i] > arry[j]) {
//       const temp = arry[i];
//       arry[i] = arry[j];
//       arry[j] = temp;
//     }
//   }
// }

// via single loop

// for (let i = 0; i < arry.length; i++) {
//   if (arry[i] > arry[i + 1]) {
//     const result = arry[i];
//     arry[i] = arry[i + 1];
//     arry[i + 1] = result;

//     i = -1;
//   }
// }
// console.log(arry);

//    (2) reverse the string

// let str = "arslan";

// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// check the given numer is even or odd

// let eventOddChecker = (item) => {
//   if (item % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// console.log(eventOddChecker(1.5));



//  (3) count the Number of vowels in str


// with built in functionality 

// let str = "arslan";

// let vowelsCount = (str) => {
//   let vowels = ["a", "i", "o", "u", "s"];
//   let count = 0;
//   let arr = str.split("");

//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.includes(arr[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(vowelsCount("arslan"));


// with nested loops

// let vowelCountLoop = (str) => {
//   let vowel = ["a", "i", "o", "u", "s"];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (str[i] == vowel[j]) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// console.log(vowelCountLoop("arslan"))
