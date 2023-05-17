// 1.   MUTATING ARRAY METHOD is used to add, remove or replace items directly to an array, such that the
//          original array dataset gets permanently altered.
//          Examples: array.push(), array.unshift(), array.splice(), array.pop(), array.shift() .

//      NON-MUTATING ARRAY METHOD is used to add, remove, or replace items in an array, in such a way that 
//          the original array dataset remains unaltered. 
//          Examples: array.slice(), array.filter(), array.concat(), ...array, array.map() .



let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// 2.   Add ‘Kotlin’ to the end of the array
languages.push('Kotlin') // languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin']





//3.    fruit = ['apple', 'mango', 'orange']


//4.    
function max(numbers) {
    let maximum = numbers[0]; // assume the first element is the maximum

    for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
        maximum = numbers[i];
    }}

    return maximum;
}
    

//5. 
function valTimesIndex(arr) {
    return arr.map((value, index) => value * index);
}
  
