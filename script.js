// 1.Removing Items by Index
let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Removes 1 element at index 2
console.log(array); // [1, 2, 4, 5]

// 2.Inserting Items at a Specific Position
array = [1, 2, 3, 4, 5];
array.splice(2, 0, 3); 
console.log(array); 

//3.Sorting Arrays with Complex Objects
let arrayOfObjects = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 35 }
];
// Sort by name
arrayOfObjects.sort((a, b) => a.name.localeCompare(b.name));
console.log(arrayOfObjects);


//4.Finding the Longest String in an Array
let strings = ['short', 'medium', 'a very long string'];
let longest = strings.reduce((a, b) => a.length > b.length ? a : b);
console.log(longest); // 'a very long string'

//5.Rotating an Array
array = [1, 2, 3, 4, 5];
let k = 2; // Number of rotations
let rotatedArray = array.slice(k).concat(array.slice(0, k));
console.log(rotatedArray); // [3, 4, 5, 1, 2]