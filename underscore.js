// // PUT YOUR CODE HERE!!!
// var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//
// 1 average - returns the average value in a given array
// var average = function(arr){
//   var total = 0;
//   for (var i = 0; i < arr.length; i++){
//   total += arr[i];
//   }
//     return total / arr.length;
//   }
//
//
// 2 contains - returns true if a given value is present in an array

// var numbers = [0, 1, 2, 3, 4, 5, 10, 500]

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


  // 3 first - returns the first element in an array

  // var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
  // var animals = ["cat", "dog", "horse", "pony"]
  //
  // function first(arr){
  //   return arr[0]}
  //
  //
  //   console.log(first(numbers));
  //   console.log(first(animals))

  //
  // 4 last - returns the last element in an array
  //
    // var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
    // var animals = ["cat", "dog", "horse", "pony"]
    //
    // function last(arr){
    //       return arr[arr.length-1]
    //     }
    //
    //   console.log(last(numbers));
    //   console.log(last(animals));
  //
  // 5 max - returns the maximum value in an array
//
//   var numbers = [0, 1, 2, 3, 4, 5, 10, 500]
//   var max = function(arr){
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

  // 6 min - returns the minimum value in an array
  // var numbers = [1, 2, 3, 4, 5, 0, 10, 500]
  // var test = [99, 43, 53, 23, 6, 7, 234, 5]
  // var min = function(arr){
  //     var result = arr[0];
  //     for (var i = 0; i < arr.length; i++) {
  //       if(arr[i] < result) {
  //         result = arr[i];
  //
  //     }
  //   }
  //     return result;
  //   }
  // console.log(min(numbers));
  // console.log(min(test));
  //
  // 7 shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.  Don't worry about implementing that exact shuffle alogrithm.  Start by creating your own simple shuffle.

  var numbers = [1, 2, 3, 4, 5, 0, 10, 500]
  var test = [99, 43, 53, 23, 6, 7, 234, 5]

    var shuffle = function(arr){
  // create new array
      var newArray = [];
    // pick random index
      var num = [Math.floor(Math.random() * arr.length)];
      for (var i = 0; i < arr.length; i++) {

    }

    console.log(shuffle(numbers));
    console.log(shuffle(test));

  //
//   8. sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.
//

// still not working...
// var numbers = [1, 2, 3, 4, 5, 0, 10, 500]
// var test = [99, 43, 53, 23, 6, 7, 234, 5]
//
//   var sample = function(arr){
//     var num = Math.floor(Math.random() * arr.length);
//
//     for (var i = 0; i < arr.length; i++) {
//       return arr[num] }
//     }
//   console.log(sample(numbers));
//   console.log(sample(test));
//

  // Moving slots
    // var numbers = [1, 2, 3, 4, 5, 0, 10, 500]
    // var test = [99, 43, 53, 23, 6, 7, 234, 5]
    //
    //   var shuffle = function(arr){
    //
    //     for (var i = 0; i < arr.length; i++) {
    //       // choose random index position
    //       var index1 = [Math.floor(Math.random() * arr.length)];
    //       // choose random index position
    //       var index2 = [Math.floor(Math.random() * arr.length)];
    //       // temporary spot for first index positiom
    //       var temp = arr[index1];
    //       // move second number into that slot
    //       arr[index1] = arr[index2];
    //       // move the other into temp
    //       arr[index2] = temp;
    //       // shuffled array
    //       return arr;
    //
    //   }
    // }
    //
    //   console.log(shuffle(numbers));
    //   console.log(shuffle(test));


  // 9. difference - returns the values from array that are not present in the other array.
  // //
  // function difference(arr1, arr2){
  //
  //     for (var i = 0; i < arr1.length; i++) {
  //       for (var i = 0; i < arr2.length; i++) {
  //       if(arr1[i] === arr2[i]){
  //         splice(i);
  //       }
  //   }
  // }
  // };
  //
  //   var numbers = [0, 1, 23, 3, 4, 5, 6, 10, 500]
  //   var test = [99, 43, 10, 23, 6, 7, 234, 5]
  //
  //
  //     console.log(difference(numbers, test))


  10. indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.


  _.indexOf([1, 2, 3], 2);
  => 1
  


  // 11. pluck - extracts a list of property values and returns them in an array.
  //
  // ```
  //   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  // _.pluck(stooges, 'name');
  // => ["moe", "larry", "curly"]
  // ```
  //
  // ##Part 2
  //
  // * each - iterates over an array and calls a given function with each element
  //
  // ```
  // _.each([1, 2, 3], alert);
  // => alerts each number in turn...
  // ```
  //
  // * compact - returns a new array with all provided undefined values removed
  //
  // ```
  // _.compact([1, "hello", undefined, 3, undefined]);
  // => [1, "hello", 3]
  // ```
  //
  // * map - returns a new array of values produced by running each element of an array through a given function
  //
  // ```
  // _.map([1, 2, 3], function(num){ return num * 3; });
  // => [3, 6, 9]
  //
  // _.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
  // => ["DOGS", "BEFORE", "CATS"]
  //
  // ```
  //
  // * filter - Looks through each value in the list, returning an array of all the values that pass a truth test
  //
  // ```
  // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  // => [2, 4, 6]
  // ```
