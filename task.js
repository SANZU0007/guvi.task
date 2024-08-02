// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// let oddNumbers = function(arr){
//   let oddArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       oddArr.push(arr[i]);
//     }
//   }
//   return oddArr;
// }




// console.log(oddNumbers(arr)); // Output:


// print the all string in captial
// let strArr = ["hello", "world", "javascript"];

// let titleCaps = function(strArr){
//   for(let i = 0; i < strArr.length; i++){
//     strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr;
// }

// console.log(titleCaps(strArr));

// sum of the array


// let arr = [1, 2, 3, 4, 5];

// let sum = (function(arr){
//   let total = 0;
//   for(let i = 0; i < arr.length; i++){
//     total += arr[i];
//   }
//   return total;
// })(arr);

// console.log(sum); // Output: 15


// return the all the prime Numberber

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let isPrime = function(num){
//   for(let i = 2; i < num; i++){
//     if(num % i === 0){
//       return false;
//     }
//   }
//   return num !== 1 && num !== 0;
// }

// let primeNumbers = function(arr){
//   let primeArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(isPrime(arr[i])){
//       primeArr.push(arr[i]);
//     }
//   }
//   return primeArr;
// }

// console.log(primeNumbers(arr)); // Output: [2, 3, 5, 7]
 

// return the media of the two sorted arrays

// function findMedianSortedArrays(nums1, nums2) {
//     let merged = nums1.concat(nums2).sort((a, b) => a - b);
//     let mid = Math.floor(merged.length / 2);
//     if (merged.length % 2 === 0) {
//       return (merged[mid - 1] + merged[mid]) / 2;
//     } else {
//       return merged[mid];
//     }
//   }

// iife function

// const median = ((nums1, nums2) => {
//     const merged = nums1.concat(nums2).sort((a, b) => a - b);
//     const mid = Math.floor(merged.length / 2);
//     return merged.length % 2 === 0
//       ? (merged[mid - 1] + merged[mid]) / 2
//       : merged[mid];
//   })([1,2,3],[4,5,6]);
//   console.log(median);

// 8.remove dublicate array
// function removeDuplicates(nums) {
//     let result = [];
//     for (let num of nums) {
//       if (!result.includes(num)) {
//         result.push(num);
//       }
//     }
//     return result;
//   }


//   IIFE VERSION

//   const nums = [1, 2, 2, 3, 3, 3, 4, 5, 5];
// const uniqueNums = ((nums) => [...new Set(nums)])(nums);
// console.log(uniqueNums);

// by 8.Rotate the array k times


// function rotate(nums, k) {
//     k %= nums.length;
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
//   }
  
//   function reverse(nums, start, end) {
//     while (start < end) {
//       [nums[start], nums[end]] = [nums[end], nums[start]];
//       start++;
//       end--;
//     }
//   }
// IIFE
// const nums = [1, 2, 3, 4, 5];
// const k = 2;
// ((nums, k) => {
//   const reverse = (nums, start, end) => {
//     while (start < end) {
//       [nums[start], nums[end]] = [nums[end], nums[start]];
//       start++;
//       end--; 










