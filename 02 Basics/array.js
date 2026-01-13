const myArr = [0, 1, 2, 3, "Hello", true, null, undefined, { name: "Rupesh" }, [4, 5, 6]];
console.log(myArr[5]);

const myArr2 = new Array(10, 20, 30);
console.log(myArr2[1]);
// - Date months are zero-indexed (0 = January, 11 = December)
// - Prefer ISO 8601 date strings for parsing (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss)

//array copy operations creates a shallow copy (means nested objects/arrays are still referenced)
const copiedArr = myArr.slice();
console.log(copiedArr);

//array length
console.log("Array Length:", myArr.length);

//push operation
myArr.push("New Element");
console.log("After Push:", myArr);

//pop operation
const poppedElement = myArr.pop();
console.log("Popped Element:", poppedElement);
console.log("After Pop:", myArr);

//shift operation
const shiftedElement = myArr.shift();
console.log("Shifted Element:", shiftedElement);
console.log("After Shift:", myArr);

//unshift operation
myArr.unshift("First Element");
console.log("After Unshift:", myArr);

//indexOf operation
const index = myArr.indexOf("Hello");
console.log("Index of 'Hello':", index);

//splice operation (removes 2 elements starting from index 2)
const splicedElements = myArr.splice(2, 2);
console.log("Spliced Elements:", splicedElements);
console.log("After Splice:", myArr);

//slice operation (creates a shallow copy from index 1 to 4)
const slicedArr = myArr.slice(1, 4);
console.log("Sliced Array (index 1 to 4):", slicedArr);

//forEach operation
console.log("Array Elements:");
myArr.forEach((element, idx) => {
  console.log(`Index ${idx}:`, element);
});

//map operation
const mappedArr = myArr2.map((num) => num * 2);
console.log("Mapped Array (elements * 2):", mappedArr);

//filter operation
const filteredArr = myArr2.filter((num) => num > 15);
console.log("Filtered Array (elements > 15):", filteredArr);

//reduce operation
const sum = myArr2.reduce((acc, num) => acc + num, 0);
console.log("Sum of Array Elements:", sum);

//find operation
const foundElement = myArr2.find((num) => num === 20);
console.log("Found Element (20):", foundElement);

//includes operation
const hasThirty = myArr2.includes(30);
console.log("Array includes 30:", hasThirty);

   // - Arrays can hold mixed data types.
   // - Use array methods like push, pop, shift, unshift for adding/removing elements.


//join operation
const joinedString = myArr2.join(" - ");
console.log("Joined Array String:", joinedString);

console.log(typeof joinedString);

//concat operation
const concatenatedArr = myArr2.concat([40, 50, 60]);
console.log("Concatenated Array:", concatenatedArr);

//spread operator to copy array
const spreadCopiedArr = [...myArr2];
console.log("Spread Copied Array:", spreadCopiedArr);

//spread operator to merge arrays
const vehicles = ['car', 'bike', 'truck'];
const moreVehicles = ['bus', 'train'];
const allVehicles = [...vehicles, ...moreVehicles];
console.log("All Vehicles:", allVehicles);

//flat operation (to flatten nested arrays)
const nestedArr = [1, 2, [3, 4], [5, [6, 7]]];
const flatArr = nestedArr.flat(2); // flattening 2 levels deep
console.log("Flattened Array:", flatArr);

//isArray operation
console.log("Is myArr an array?", Array.isArray(myArr));
console.log("Is myDate an array?", Array.isArray(new Date()));

//from operation (to create array from iterable or array-like objects)
const str = "Hello";
const strArr = Array.from(str);
console.log("Array from string:", strArr);
console.log(Array.from({name: "Rupesh"}));   // creates an empty array as the object is not iterable

//of operation (to create array from arguments)
let score1 = 10;
let score2 = 20;
let score3 = 30;
const scoresArr = Array.of(score1, score2, score3);
console.log("Array of scores:", scoresArr);


/*
    Quick notes for learners:
    - Arrays can hold mixed data types.
    - Use array methods like push, pop, shift, unshift for adding/removing elements.
    - Use slice for shallow copying arrays.
    - Use map, filter, reduce for functional programming with arrays.

    Summary:
    - Create: `[]` or `new Array()`
    - Common methods: `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `forEach()`, `map()`, `filter()`, `reduce()`

*/