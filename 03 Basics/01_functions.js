/*
	Functions in JavaScript - beginner-friendly examples and notes

	This file shows common ways to define and use functions,
	with small, self-contained examples you can run and experiment with.
*/

// --- 1) Function declaration ---
function greet(name) {
	// A named function available throughout its scope
	return `Hello, ${name}!`;
}
console.log(greet('Rupesh'));


// --- 2) Function expression ---
const add = function (a, b) {
	// This function is stored in a variable
	return a + b;
};
console.log( add(2, 3));


// --- 3) Arrow functions ---
const multiply = (a, b) => a * b; // short form
const square = n => n * n; // single parameter can omit parentheses
console.log('multiply(3,4)=', multiply(3, 4));
console.log('square(5)=', square(5));


// --- 4) Default parameters ---
function say(message = 'Hello') {
	console.log(message);
}
say();
say('Custom message');


// --- 5) Rest parameters & spread ---
function sum(...nums) {
	// `nums` is an array of all provided arguments
	return nums.reduce((s, n) => s + n, 0);
}
console.log('sum(1,2,3)=', sum(1, 2, 3));

const parts = [4, 5, 6];
console.log('sum(...parts)=', sum(...parts)); // spread expands an array into arguments


// --- 6) Callbacks ---
function callTwice(fn) {
	// higher-order function: accepts a function as argument
	fn();
	fn();
}
callTwice(() => console.log('callback called'));


// --- 7) Simple map implementation (higher-order) ---
function simpleMap(arr, fn) {
	const out = [];
	for (let i = 0; i < arr.length; i++) {
		out.push(fn(arr[i], i));
	}
	return out;
}
console.log('simpleMap ->', simpleMap([1, 2, 3], x => x * 2));


// --- 8) Immediately-invoked function expression (IIFE) ---
(function () {
	// runs immediately and doesn't pollute the outer scope
	console.log('IIFE runs now');
})();


// --- 9) Recursion ---
function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
console.log('factorial(5)=', factorial(5));


// --- 10) Async function with Promise ---
function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function demoAsync() {
	console.log('waiting 200ms...');
	await wait(200);
	console.log('done waiting');
}
demoAsync();


// --- 11) Error handling example ---
function safeParse(json) {
	try {
		return JSON.parse(json);
	} catch (err) {
		// return null on invalid JSON instead of throwing
		return null;
	}
}
console.log('safeParse valid->', safeParse('{"a":1}'));
console.log('safeParse invalid->', safeParse('not json'));


/*
	Quick tips for learners:
	- Use function declarations for named utilities and hoisting when helpful.
	- Use arrow functions for concise callbacks and small utilities.
	- Prefer default/rest/spread syntax for clearer APIs.
	- Keep functions small and focused (single responsibility).
*/
