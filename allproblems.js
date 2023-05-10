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

// console.log(vowelCountLoop("arslan"));

// (4) the first letter must be capital letter of str

// function frontDoorPassword(word) {
//   let lowercase = word.toLowerCase().slice(1);
//   let uppercase = word.charAt(0).toUpperCase();
//   let result = uppercase + lowercase;
//   return result;
// }
// console.log(frontDoorPassword("ARSLAN"));

// let str = "arslan";

// let finalFinal = str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);

// console.log(finalFinal);

// (5)  remove the last letter in sentence

// let str = "you satnd high   ";
// let trimmed = str.trim();

// let sep = trimmed.split("");

// let lastLetter = sep[sep.length - 1];

// console.log(lastLetter);

// (6) problem
//  input backDoorPassword('horse');
// => output "Horse, please"

// function backDoorPassword(word) {
//   let captlize = word.charAt(0).toUpperCase();
//   let remining = word.slice(1);
//   let combine = captlize + remining;

//   let result = combine + "," + " please";

//   return result;
// }

// console.log(backDoorPassword("horse"));

// (7) input: [1,[2,3,null,4],[null],5]

// output: [1,2,3,4,5]


let arr = [1, [2, 3, null, 4], [null], 5];

const flatten = (arr) => {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] !== null) flatArr.push(arr[i][j]);
      }
    } else {
      if (arr[i] !== null) {
        flatArr.push(arr[i]);
      }
    }
  }

  return flatArr;
};

console.log(flatten(arr))
