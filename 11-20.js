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

//   {one: 3, two: 2, three: 1}
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


// (13) find the multiple upto a limit

// const findMultipile = (num,limit) => { 
//     let multipipe = [];
//     for(let i = 1; i < limit; i++) {
//         if(i % num === 0){ 
//             multipipe.push(i);
//         }
// }
// return multipipe;
// }
// console.log(findMultipile(2,100))

// (14) remove the duplicate from the array

// let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5]
// let removeDuplicate = (arr) => { 
// let uniququeItems = [];
// for(let i = 0; i < arr.length; i++){ 
//     if(uniququeItems.indexOf(arr[i]) === -1) { 
//         uniququeItems.push(arr[i]); 
//     }
// }
// return uniququeItems
// }
// console.log(removeDuplicate(arr))


// from set

// let array = [1,2,3,4,5,5,4,3,2,9,0]
// let removedArr = new Set(array);
// // console.log(removedArr);
// let convertToArr = Array.from(removedArr);
// console.log(convertToArr);

// (15)  shuffle the array

const shuffleArray = (array) => { 
    for(let i = array.length - 1; i >= 0; i--){ 
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
    return array
}

console.log(shuffleArray([1,1,2,2,3,3,4,4,5,5]),"here")


