/*
	Dates & Time - beginner-friendly examples and notes

	Short goals for this file:
	- Show how to create Date objects in different ways
	- Demonstrate common methods and what they return
	- Explain gotchas (zero-indexed months, getDay vs getDate)
	- Prefer explicit, unambiguous formats (ISO 8601) when parsing strings
*/

// --- Creating Dates ---
// Current date & time
const myDate = new Date();
console.log('Current Date (raw):', myDate);

// Common string and object representations
console.log('toString():', myDate.toString());
console.log('toDateString():', myDate.toDateString());
console.log('toISOString():', myDate.toISOString()); // ISO 8601, good for storage/transport
console.log('toLocaleString():', myDate.toLocaleString()); // formatted for your locale
console.log('toLocaleDateString():', myDate.toLocaleDateString());
console.log('toJSON():', myDate.toJSON());
console.log('typeof myDate:', typeof myDate); // "object"

// --- Constructing a date from components ---
// Note: Months are zero-indexed (0 = January, 11 = December)
const myCreatedDate = new Date(2026, 0, 10); // 10 Jan 2026
console.log('Created from (year, monthIndex, day):', myCreatedDate.toDateString());

// --- Parsing from a string ---
// Prefer ISO 8601 strings (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss)
// Non-ISO strings like "11-01-2025" may be interpreted differently across environments.
const myCreatedDate2 = new Date('2025-11-01T10:25:00');
console.log('Parsed from ISO string (toLocale):', myCreatedDate2.toLocaleString());

// --- Timestamps ---
const myTimeStamp = Date.now(); // milliseconds since Unix epoch (1970-01-01T00:00:00Z)
console.log('Timestamp (ms):', myTimeStamp);
console.log('Seconds since epoch:', Math.floor(myTimeStamp / 1000));

// You can also create a Date from a timestamp (milliseconds):
const fromTimestamp = new Date(myTimeStamp);
console.log('Date from timestamp:', fromTimestamp.toString());

// --- Common getters ---
const newDate = new Date();
console.log('Now:', newDate.toString());

// getDay() -> day of week (0 = Sunday, 6 = Saturday)
// getDate() -> day of month (1 - 31)
console.log('Day of week (0=Sun):', newDate.getDay());
console.log('Day of month:', newDate.getDate());

// getMonth() returns 0-11, add 1 to show 1-12 for humans
console.log('Month (1-12):', newDate.getMonth() + 1);
console.log('Year:', newDate.getFullYear());
console.log('Time (H:M:S):', newDate.getHours(), newDate.getMinutes(), newDate.getSeconds());

// Get the weekday name using toLocaleString options (and log the result)
const weekdayName = newDate.toLocaleString('default', { weekday: 'long' });
console.log('Weekday name:', weekdayName);

// --- UTC date example ---
const utcDate = new Date(Date.UTC(2025, 10, 1, 10, 25, 0)); // months still zero-indexed
console.log('UTC constructed date (ISO):', utcDate.toISOString());

/*
	Quick notes for learners:
	- Months are zero-indexed when using the constructor that accepts numbers.
	- Use `getDate()` for the day of the month, `getDay()` for day of week.
	- Prefer ISO strings (YYYY-MM-DD or with time YYYY-MM-DDTHH:mm:ss) when parsing strings.
	- `toISOString()` always returns UTC time (useful for APIs/storage).

	Summary:
	- Create: `new Date()` (now), `new Date(ms)`, `new Date(year, monthIndex, day, ...)`, or `new Date(isoString)`
	- Common methods: `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`
	- Useful output: `toString()`, `toDateString()`, `toISOString()`, `toLocaleString()` 
*/