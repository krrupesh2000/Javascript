// Object Destructuring and JSON API

const course = {
    courseName: "JavaScript Basics",
    price: 1999,
    courseInstructor: "Rupesh",
}

const { courseName } = course; // object destructuring
console.log('courseName:', courseName); // "JavaScript Basics"

const {courseInstructor: instructor} = course; // renaming while destructuring
console.log('instructor:', instructor); // "Rupesh"

// Simulating a JSON API response
const jsonResponse = `{
    "data": {
        "id": "course001",
        "attributes": {
            "title": "Learn JavaScript",
            "duration": "3 months"
        }
    }
}`;

// Parse JSON string to JavaScript object
const apiData = JSON.parse(jsonResponse);

// Destructure to extract nested values
const { data: { attributes: { title, duration } } } = apiData;

console.log('Course Title from API:', title); // "Learn JavaScript"
console.log('Course Duration from API:', duration); // "3 months"

/*
    Short notes / tips:
    - Use object destructuring to extract properties easily.
    - When dealing with JSON APIs, parse the JSON string first.
    - You can destructure nested objects in one statement.
*/