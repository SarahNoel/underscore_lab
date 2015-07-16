// // 1 average - returns the average value in a given array
//
// var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//
// function average(arr){
//   var total = 0;
//   for (var i = 0; i < arr.length; i++){
//   total += arr[i];
//   }
//     return total / arr.length;
//   }
// console.log(average(numbers))
//
// // 2 contains - returns true if a given value is present in an array
//
// var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//
// function contains(arr, input){
//   var output = "False";
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] === input){
//       var output = "True";
//     }
// }
// return output;
//
// }
// var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//
//   console.log(contains(numbers, 10));
//   console.log(contains(numbers, 99));
//   console.log(contains(numbers, 4));
//
//
// // 3 first - returns the first element in an array
//
//   var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//   var animals = ["cat", "dog", "horse", "pony"]
//
//   function first(arr){
//     return arr[0]}
//
//
//     console.log(first(numbers));
//     console.log(first(animals))
//
//
// // 4 last - returns the last element in an array
//
//     var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//     var animals = ["cat", "dog", "horse", "pony"]
//
//     function last(arr){
//           return arr[arr.length-1]
//         }
//
//       console.log(last(numbers));
//       console.log(last(animals));
//
//   // 5 max - returns the maximum value in an array
//
//   var test = [99, 43, 53, 23, 6, 7, 234, 5]
//   var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//   function max (arr){
//       var result = 0;
//       for (var i = 0; i < arr.length; i++) {
//         if(arr[i] > result) {
//           result = arr[i];
//
//       }
//     }
//       return result;
//     }
// console.log(max(numbers));
// console.log(max(test));
//
//
// // 6 min - returns the minimum value in an array
//   var numbers = [1, 2, 3, 4, 5, 0, 10, 500]
//   var test = [99, 43, 53, 23, 6, 7, 234, 5]
// function min(arr){
//       var result = arr[0];
//       for (var i = 0; i < arr.length; i++) {
//         if(arr[i] < result) {
//           result = arr[i];
//
//       }
//     }
//       return result;
//     }
//   console.log(min(numbers));
//   console.log(min(test));
//
// // 7. shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.  Don't worry about implementing that exact shuffle alogrithm.  Start by creating your own simple shuffle.
//

//   var numbers = [1, 2, 3, 4, 5, 0, 10, 500];
//   var test = [99, 43, 53, 23, 6, 7, 234, 5];
//
//   function shuffle(arr){
//   // create new array
//       var newArray = [];
//       var workA = arr.slice(0);
//       arrLength = workA.length;
//           for (var i = 0; i < arrLength; i++) {
//             var num = Math.floor(Math.random() * workA.length);
//             newArray.push(workA.splice(num,1)[0]);
//
// }
//         return newArray;
//
//     }
//
//     console.log(shuffle(numbers));
//     console.log(shuffle(test));
//     console.log(numbers);
// //



  // Moving slots
var numbers = [1, 2, 3, 4, 5, 0, 10, 500];
var test = [99, 43, 53, 23, 6, 7, 234, 5];

var shuffle = function(arr){

for (var i = 0; i < arr.length; i++) {
          // choose random index position
          var index1 = [Math.floor(Math.random() * arr.length)];
           // choose random index position
           var index2 = [Math.floor(Math.random() * arr.length)];
           // temporary spot for first index positiom
           var temp = arr[index1];
            // move second number into that slot
            arr[index1] = arr[index2];
           // move the other into temp
           arr[index2] = temp;
            // shuffled array
      return arr;
    }
  };

console.log(shuffle(numbers));
console.log(shuffle(test));

// //
// //   8. sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
//
// var numbers = [1, 2, 3, 4, 5, 0, 10, 500];
// var test = [99, 43, 53, 23, 6, 7, 234, 5];
//
// function sample(arr, n){
//   var newArray = [];
//   if (n === undefined){
//     n=1;
//   }
//   for (var i = 0; i < n; i++) {
//     var num = Math.floor(Math.random() * arr.length);
//     newArray.push(arr.splice(num,1)[0]);
// }
//       return newArray;
//     }
//   console.log(sample(numbers, 5));
//   console.log(sample(test, 3));
//   console.log(sample(numbers));
//

//
//
// // 9. difference - returns the values from array that are not present in the other array.
//
//   // still not working-

  // function difference(arr1, arr2){
  //
  //     for (var i = 0; i < arr1.length; i++) {
  //
  //
  //       for (var i = 0; i < arr2.length; i++) {
  //
  //       if(arr1[i] === arr2[i]){
  //
  //         splice(i);
  //       }
  //   }
  // }
  // }
  //
  //   var numbers = [0, 1, 23, 3, 4, 5, 6, 10, 500]
  //   var test = [99, 43, 10, 23, 6, 7, 234, 5]
  //
  //     console.log(difference(numbers, test))

//
// // 10. indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.
//
// // always returns -1!!
// var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
// function indexOf(arr, value){
//     var pos = -1;
//     for (var i = 0; i < arr.length; i++) {
//       if(arr[i] === value){
//         pos = i;}
//         else {
//           return pos
//       }
//
//   }
//   }
//
//     console.log(indexOf(numbers, 10));
//     console.log(indexOf(numbers, 3));
//     console.log(indexOf(numbers, 48));
//
//
//
// // 11. pluck - extracts a list of property values and returns them in an array.
//
// function pluck(){
//
//   }
//     var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//   _.pluck(stooges, 'name');
//   => ["moe", "larry", "curly"]
//
//
// // ##Part 2
//
// // 2.1 each - iterates over an array and calls a given function with each element
//
// function each(){
//
//   }
//   _.each([1, 2, 3], alert);
//   => alerts each number in turn...
//
// // 2.2 compact - returns a new array with all provided undefined values removed
//
//   function compact(){
//
//   }
//   _.compact([1, "hello", undefined, 3, undefined]);
//   => [1, "hello", 3]
//
//
// // 2.3 map - returns a new array of values produced by running each element of an array through a given function
//
//
//   _.map([1, 2, 3], function(num){ return num * 3; });
//   => [3, 6, 9]
//
//   _.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
//   => ["DOGS", "BEFORE", "CATS"]
//
//
//
// // 2.4 filter - Looks through each value in the list, returning an array of all the values that pass a truth test
//
//
//   var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => [2, 4, 6]
