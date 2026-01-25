/*
╔═══════════════════════════════════════════════════════════════════════╗
║              NULLISH COALESCING OPERATOR (??) IN JAVASCRIPT            ║
╚═══════════════════════════════════════════════════════════════════════╝

The Nullish Coalescing operator (??) returns the right-hand operand when
the left-hand operand is null or undefined. Otherwise, it returns the
left-hand operand.

Syntax: leftValue ?? rightValue

Returns:
  • rightValue if leftValue is null or undefined
  • leftValue otherwise

═══════════════════════════════════════════════════════════════════════
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BASIC CONCEPT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Example 1: Using ?? with null
const user1 = null;
const user1Name = user1 ?? "Guest";
console.log(user1Name);  // Output: "Guest" (because null is nullish)

// Example 2: Using ?? with undefined
let value;  // undefined
const result = value ?? "default value";
console.log(result);  // Output: "default value" (because undefined is nullish)

// Example 3: Using ?? with a valid value
const score = 0;
const finalScore = score ?? 100;
console.log(finalScore);  // Output: 0 (0 is not nullish, it's falsy but valid)

// Example 4: Using ?? with a truthy value
const username = "Alice";
const displayName = username ?? "Anonymous";
console.log(displayName);  // Output: "Alice" (not nullish)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ?? vs || (Difference from OR operator)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
IMPORTANT: ?? and || are different!

OR operator (||) returns right value if left is FALSY
  • Falsy values: false, 0, "", null, undefined, NaN

Nullish coalescing (??) returns right value if left is NULLISH
  • Nullish values: null, undefined (ONLY these two!)

This makes ?? more precise when dealing with falsy but valid values.
*/

// Comparison: Scores
const playerScore = 0;

// Using || (OR operator)
const scoreWith_OR = playerScore || 100;
console.log("Using ||:", scoreWith_OR);  // Output: 100 (0 is falsy)

// Using ?? (Nullish coalescing)
const scoreWith_NC = playerScore ?? 100;
console.log("Using ??:", scoreWith_NC);  // Output: 0 (0 is not nullish)
// ↑ This is correct! Score of 0 should be kept, not replaced

// Comparison: Empty string
const userName = "";

const nameWith_OR = userName || "Guest";
console.log("Using ||:", nameWith_OR);  // Output: "Guest" (empty string is falsy)

const nameWith_NC = userName ?? "Guest";
console.log("Using ??:", nameWith_NC);  // Output: "" (empty string is not nullish)
// ↑ This is correct! Empty string input should be kept

// Comparison: Zero quantity
const quantity = 0;

const qtyWith_OR = quantity || 10;
console.log("Using ||:", qtyWith_OR);  // Output: 10 (0 is falsy)

const qtyWith_NC = quantity ?? 10;
console.log("Using ??:", qtyWith_NC);  // Output: 0 (0 is not nullish)
// ↑ Correct! Quantity of 0 is valid data, not missing data

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NULLISH vs FALSY VALUES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Nullish Values (only these trigger ??):
  • null
  • undefined

Falsy Values (trigger ||, but NOT ??):
  • false
  • 0
  • -0
  • 0n (BigInt zero)
  • ""
  • null ← Also nullish
  • undefined ← Also nullish
  • NaN

Rule: All nullish values are falsy, but not all falsy values are nullish!
*/

// Example: Testing different falsy values
console.log("\n--- Testing Falsy Values ---");

// null and undefined ARE nullish
console.log(null ?? "default");        // "default"
console.log(undefined ?? "default");   // "default"

// These ARE falsy but NOT nullish
console.log(false ?? "default");       // false
console.log(0 ?? "default");           // 0
console.log("" ?? "default");          // ""
console.log(NaN ?? "default");         // NaN

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CHAINING NULLISH COALESCING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
You can chain multiple ?? operators to provide fallback values in order.
The first non-nullish value will be returned.

Syntax: value1 ?? value2 ?? value3 ?? defaultValue
*/

// Example 1: Multiple fallbacks
const preference1 = null;
const preference2 = undefined;
const preference3 = "blue";
const defaultColor = "red";

const color = preference1 ?? preference2 ?? preference3 ?? defaultColor;
console.log(color);  // Output: "blue" (first non-nullish value)

// Example 2: User profile with multiple fallbacks
const userCity = undefined;
const userState = null;
const userRegion = "North";
const userCountry = "USA";

const location = userCity ?? userState ?? userRegion ?? userCountry;
console.log("Location:", location);  // Output: "Region" → actually should be "North"

// Example 3: Settings with fallbacks
const customFont = null;
const userFont = "Arial";
const systemFont = "Helvetica";
const defaultFont = "Times New Roman";

const selectedFont = customFont ?? userFont ?? systemFont ?? defaultFont;
console.log("Font:", selectedFont);  // Output: "Arial"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMBINING WITH OPTIONAL CHAINING (?.)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Optional chaining (?.) accesses properties safely (returns undefined if
property doesn't exist). Combined with ??, this creates powerful defaults.

Syntax: object?.property ?? defaultValue
*/

// Example 1: Safe property access with default
const user = {
    name: "John",
    profile: {
        email: "john@example.com"
        // no bio property
    }
};

const userEmail = user?.profile?.email ?? "no-email@example.com";
console.log("Email:", userEmail);  // Output: "john@example.com"

const userBio = user?.profile?.bio ?? "No biography available";
console.log("Bio:", userBio);  // Output: "No biography available"

// Example 2: Non-existent object
const guest = null;
const guestEmail = guest?.email ?? "guest@example.com";
console.log("Guest Email:", guestEmail);  // Output: "guest@example.com"

// Example 3: Nested defaults
const config = {
    database: {
        host: null,
        port: 3306
    }
};

const dbHost = config?.database?.host ?? "localhost";
console.log("DB Host:", dbHost);  // Output: "localhost"

const dbPort = config?.database?.port ?? 5432;
console.log("DB Port:", dbPort);  // Output: 3306

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRACTICAL REAL-WORLD EXAMPLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Example 1: API Response Handling
function handleApiResponse(response) {
    const data = response?.data ?? { message: "No data received" };
    const status = response?.status ?? 500;
    const timestamp = response?.timestamp ?? new Date();
    
    return { data, status, timestamp };
}

const apiResponse = { data: null, status: 200 };
console.log("API Result:", handleApiResponse(apiResponse));

// Example 2: User Settings with Defaults
function getUserSettings(userSettings) {
    return {
        theme: userSettings?.theme ?? "light",
        language: userSettings?.language ?? "en",
        fontSize: userSettings?.fontSize ?? 14,
        notifications: userSettings?.notifications ?? true
    };
}

const customSettings = { theme: "dark", fontSize: null };
console.log("Settings:", getUserSettings(customSettings));

// Example 3: Form Input Validation
function processFormData(formData) {
    return {
        firstName: formData?.firstName ?? "",
        lastName: formData?.lastName ?? "",
        age: formData?.age ?? 0,
        country: formData?.country ?? "Unknown"
    };
}

const form = { firstName: null, age: 25 };
console.log("Form Data:", processFormData(form));

// Example 4: Configuration with Multiple Layers
const appConfig = {
    api: {
        timeout: null,
        retries: undefined
    }
};

const apiTimeout = appConfig?.api?.timeout ?? 5000;
const apiRetries = appConfig?.api?.retries ?? 3;

console.log("API Timeout:", apiTimeout, "ms");       // 5000
console.log("API Retries:", apiRetries);              // 3

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMMON PATTERNS & BEST PRACTICES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
Pattern 1: Default Values for Potentially Null Data
  const value = apiResponse?.data ?? "No data"

Pattern 2: Configuration with Cascading Defaults
  const setting = userConfig?.value ?? systemConfig?.value ?? default

Pattern 3: Safe Object Navigation
  const email = user?.contact?.email ?? "no-email@example.com"

Pattern 4: Numeric Defaults (when 0 is valid)
  const count = result?.count ?? 0  // Use ??, not ||
  const price = item?.price ?? 9.99

WHEN TO USE ??:
  ✓ You want to treat falsy values (0, "", false) as valid
  ✓ You only want to use default when value is null/undefined
  ✓ Dealing with API responses that might have falsy values
  ✓ User input that could be 0 or empty string

WHEN TO USE ||:
  ✗ For strict null checks, use ?? instead
  ✓ Only use || when you want to treat all falsy values as invalid
  ✓ When 0, "", false should trigger the default (rare)

BROWSER SUPPORT:
  • Supported in all modern browsers (ES2020)
  • Not supported in older browsers (IE 11, etc.)
  • Can use polyfills for older browser compatibility
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GOTCHAS & IMPORTANT NOTES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
GOTCHA 1: ?? and || cannot be used together without parentheses
  // ❌ This throws an error:
  value1 || value2 ?? value3
  
  // ✓ Use parentheses:
  (value1 || value2) ?? value3

GOTCHA 2: Difference between null and missing property
  const obj = { prop: null };
  obj?.prop ?? "default"  // Returns "default" (prop is null)
  
  const obj2 = {};
  obj2?.prop ?? "default" // Returns "default" (prop is undefined)

GOTCHA 3: ?? returns the first non-nullish value
  const result = null ?? false ?? 0;
  console.log(result);  // false (first non-nullish value)

GOTCHA 4: Side effects in chained ??
  function getValue() { console.log("called"); return null; }
  const x = null ?? getValue();  // getValue() WILL be called
  // "called" is printed
*/
