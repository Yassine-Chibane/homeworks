/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
    if(num1 > num2){
      return num1
    } else {
      return num2
    }
  };
  
  console.log(maxOfTwoNumbers(13,8))
  
  
  /*
  2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num3, num4, num5) => {
    var max = Math.max(num3, num4, num5);
      return max;
    // ADD YOUR CODE HERE
  };
  console.log(maxOfThree(251,43,73))
  /*
  3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (letter) => {
    // ADD YOUR CODE HERE
      //var text;
      var letter = letter.toLowerCase();
      var vowels = (['a', 'e', 'i', 'o', 'u']);
  
      for (var i = 0; i <= vowels.length; i++){
          if (letter != vowels[i]) {
              continue;
          }
          return true;
      }
      return false;
  }
  
  // See if "A" is a vowel
  var char = "A";
  
  if (isCharacterAVowel(char)) {
      console.log(char + " is a vowel");
  } else {
      console.log(char + " is not a vowel");
  }
  
  //Alternative answer
  
  function isCharacterAVowel2(c) {
    var vowels = ['a','e','i','o','u'];
    if (vowels.indexOf(c) !== -1) {
      return true;
    }
    return false;
  }
  var char = "c";
  
  if (isCharacterAVowel2(char)) {
      console.log(char + " is a vowel");
  } else {
      console.log(char + " is not a vowel");
  }
  /*
  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
  */
  
  sumArray = (numbers) => {
  var total = 0;
      for (var i = 0; i < numbers.length; i++) {
          total += numbers[i];
      }
      return total;
  }
  // Print out the total to the console
  console.log(sumArray([1,2,3,4]));
    // ADD YOUR CODE HERE
  multiplyArray = (numbers) => {
  var total = 1;
      for (var i = 0; i < numbers.length; i++) {
          total = total * numbers[i];
      }
      return total;
  }
  // Print out the total to the console
  console.log(multiplyArray([1,2,3,4]));
  
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  var numberOfArguments = function(){
    return arguments.length
  }
  console.log(numberOfArguments("Social distancing and vaccination is the only remedy against Covid"))
  
  /*
  6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = (str) => {
    // ADD YOUR CODE HERE
      var text = '';
      
      for (var i = str.length - 1; i >= 0; i--) {
          text += str[i];
          continue
      }
      return text.toLowerCase();
  }
  console.log(reverseString("Coding is fun"));
  
  /*
  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (str) => {
    // ADD YOUR CODE HERE
      let words = str.split(' ');
      let maxLength = 0;
    
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
        }
      }
      return maxLength;
    }
    
    
  console.log(findLongestWord("Social distancing and vaccination is the only remedy against Covid"))
  
  /*
  8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (arr, num) => {
    // ADD YOUR CODE HERE
  //function filterLongWords (arr,num) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length > num){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }