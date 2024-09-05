const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakit'];
const sortedPersons = persons.sort();
console.log(sortedPersons);


// sort ---> 
const numbers = [4, 7, 2, 8, 9, 3, 1];
/*
Ascending ---> smaller to larger: [1, 2, 3, 4, 7, 8, 9]
Descending ---> larger to smaller: [9, 8, 7, 4, 3, 2, 1]
*/

const numbers_ase = [...numbers].sort(function (a, b) {return a - b});
const numbers_dse = [...numbers].sort(function (a, b) {return b - a});

    
console.log(numbers_ase);
console.log(numbers_dse);