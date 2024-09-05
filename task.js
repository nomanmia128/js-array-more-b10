// array-looping-tasks


// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
// ---------------
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// colors.reverse();
// console.log(colors);
// -----------------



// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
// --------------------
// const numbers = [12, 98, 5, 41, 23, 78, 46];

// const evenNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i]);
//     }
// }
// console.log(evenNumbers);

// [12, 98, 76, 46]

// const oddNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 1){
//         oddNumbers.push(numbers[i]);
//     }
// }
// console.log(oddNumbers);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
// ------------------
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let jnnn = '';
// for(const name  of numbers){
//     jnnn += name;
//  }
// console.log(jnnn);
// ------------------

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
// --------------
// const statement = 'I am a hard working person'


const statement = 'I am a hard working person';

// const reversedWords = statement.split(' ').reverse().join(' ');
// console.log(reversedWords);  // Output: 'person working hard a am I'


const reversedWords = statement.split(' ').reverse().join(' ');
console.log(reversedWords);


