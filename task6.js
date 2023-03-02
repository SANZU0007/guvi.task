// 1.Fix for the code to get the largest of three:

// const aa = (f, s, t) => {
//     console.log(f, s, t);
//     if (f > s && f > t) {
//      console.log(f);
//     } else if (s > f && s > t) {
//      console.log(s);
//     } else {
//      console.log(t);
//     }
//    };
   
//    aa(1, 2, 3);
   
//    2.Fix for the code to Sum of the digits present in the number:
//    let n = 123;
// console.log(add(n));

// function add(n) {
//  let sum = 0;
//  n = n.toString();
//  for (let i = 0; i < n.length; i++) {
//   sum += parseInt(n[i]);
//  }
//  return sum;
// }

// 3.Fix for the code to Sum of all numbers using IIFE function:

// const arr = [9, 8, 5, 6, 4, 3, 2, 1];
// (function () {
//  let sum = 0;
//  for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();


// 4.Fix for the code to gen Title caps:

// const arr = ["guvi", "geek", "zen", "fullstack"];
// const ano = (arro) => {
//  for (let i = 0; i < arro.length; i++) {
//   console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// };
// ano(arr);


// 5.Fix the code to return the Prime numbers:

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<num;i++){
//    if(num%i===0)
//    {
//      return false;
//    }
//  }
//  return num>1;
// });
// console.log(myPrime);


// 6.Fix the code to sum the number in that array:


// const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] 
// const sum = (a, b) =>
//  a + b
// const result = num.reduce(sum)
// console.log(result);


// 7.Fix the code to rotate an array by k times and return rotated array using IIFE function:

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = k % arr.length;
// (function() {
//   const out = arr.slice(k).concat(arr.slice(0, k));
//   console.log(out);
// })();

// 8.Fix the code to gen Title caps.:

// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function() {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//   }
// })();

// 9.print all odd numbers in an array using IIFE function:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(arr[i]);
//     }
//   }
// })();


// 10.Fix the code to reverse:


// (function(str){
//     str1 = str.split(" ").reverse().join(" ");
//     console.log(str1); 
//   })("abcd");


//   11.Fix the code to remove duplicates:


//   var res = function(arr){
//     var newArr = [];
//     for(var i=0; i < arr.length; i++){
//       if(newArr.indexOf(arr[i]) == -1) {
//         newArr.push(arr[i]);
//       }
//     }
//     console.log(newArr);
//   }
//   res(["guvi","geek","guvi","duplicate","geeK"]);

//   12.Fix the code to give the below output:

//   Expected Output:


//   [
//     {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
//     {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
//   ]
  

//   var array =[  [    ["firstname","vasanth"],
//     ["lastname","Raja"],
//     ["age",24],
//     ["role","JSWizard"]
//   ],
//   [    ["firstname","Sri"],
//     ["lastname","Devi"],
//     ["age",28],
//     ["role", "Coder"]
//   ]
// ];
// var final=[];
// while(array.length!==0)
// {
//   var outer_remove = array.shift();
//   var new_object = {};
//   while(outer_remove.length!==0)
//   {
//     var inner_remove = outer_remove.shift();
//     var key = inner_remove[0];
//     var value = inner_remove[1];
//     new_object[key]=value;
//   }
//   final.push(new_object);
// }
// console.log(final);

  
  









  














