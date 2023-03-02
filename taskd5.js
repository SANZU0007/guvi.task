
// //1.to print the array
// // Output: 1234567891011

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i];
// }

// console.log(new_string);

// 2.To print the numbers in the array with commas:
// Output: 1,2,3,4,5,6,7,8,9,10,11

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = 0; i < numsArr.length; i++) {
//   new_string += numsArr[i];
//   if (i < numsArr.length - 1) {
//     new_string += ",";
//   }
// }

// console.log(new_string);


// 3.To print from last to first with spaces:


// // Output: 11 10 9 8 7 6 5 4 3 2 1

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";

// for (var i = numsArr.length - 1; i >= 0; i--) {
//   new_string += numsArr[i];
//   if (i > 0) {
//     new_string += " ";
//   }
// }

// console.log(new_string);


// 4.To replace even numbers with the string "even":

// // Output: [1, "even", 3, "even", 5, "even", 7, "even", 9, "even", ...]

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 == 0) {
//     numsArr[i] = "even";
//   }
// }

// console.log(numsArr);


// 5.To replace even-indexed elements with the string "even":

// // Output: ["even", 2, "even", 4, "even", 6, "even", 8, "even", 10, ...]

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// for (var i = 0; i < numsArr.length; i++) {
//   if (i % 2 == 0) {
//     numsArr[i] = "even";
//   }
// }

// console.log(numsArr);


// 6.To add all the numbers in the array:

// // Output: 66

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;

// for (var i = 0; i < numsArr.length; i++) {
//   sum += numsArr[i];
// }

// console.log(sum);


// 7.Code to add the even numbers only
// Output: 30

// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 == 0) {
//     sum += numsArr[i];
//   }
// }
// console.log(sum);

//  8.Code to add the even numbers and subtract the odd numbers
// Output: 94
// var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 100;
// for (var i = 0; i < numsArr.length; i++) {
//   if (numsArr[i] % 2 != 0) {
//     sum += numsArr[i];
//   } else {
//     sum -= numsArr[i];
//   }
// }
// console.log(sum);
 
// 9.code to print arrays

// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//   console.log(numsArr[i]);
// }

// 9.Code to print elements in the inner arrays
// Output: 1234567891011

// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// var str_all = "";
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++) {
//     str_all += inner_array[j];
//   }
// }
// console.log(str_all);


// 10.Code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [["even", 2, "even", 4, "even"], [6, "even", 8, "even", 10, 11]]

// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
//   for (var j = 0; j < inner_array.length; j++) {
//     if (j % 2 == 0) {
//       inner_array[j] = "even";
//     }
//   }
// }
// console.log(numsArr);


// 11.Code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1


// var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
// var str_all = "";
// for (var i = 0; i < numsArr.length; i++) {
//   var inner_array = numsArr[i];
 

























































