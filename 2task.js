// print the odd number in array using arrow function

// 1. const printOddNumbers = arr => {
//     arr.forEach(num => {
//       if (num % 2 !== 0) {
//         console.log(num);
//       }
//     });
//   };

// 2.Return all the prime numbers in an array

// const getPrimes = (arr) => {
//     const isPrime = (num) => {
//       for(let i = 2; i < num; i++) {
//         if(num % i === 0) {
//           return false;
//         }
//       }
//       return num !== 1;
//     };
    
//     return arr.filter(isPrime);
//   };
  


// 3.sum of all numbers in Array

// const sumOfNumbers = arr => {
//     return arr.reduce((acc, curr) => {
//       return acc + curr;
//     }, 0);
//   };

// 4.return the polindroams in all array
// const getPalindromes = (arr) => {
//     const isPalindrome = (str) => {
//       const reversedStr = str.split('').reverse().join('');
//       return str === reversedStr;
//     };
    
//     return arr.filter(isPalindrome);
//   };


//   2.Convert all the strings to title caps in a string array

//   const stringArray = ["hello world", "goodbye moon", "the quick brown fox"];

// const titleCaseArray = stringArray.map((str) =>
//   str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// );

// console.log(titleCaseArray);
// // Output: ["Hello World", "Goodbye Moon", "The Quick Brown Fox"]









