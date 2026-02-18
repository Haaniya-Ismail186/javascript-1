// --- 1. Custom Power Function ---
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

// --- 2. Leap Year Function ---
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// --- 3. Area of Triangle using 2 Functions ---
// Function to calculate Semi-perimeter (S)
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

// Function to calculate Area using Heron's Formula
function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
    // Formula: sqrt(s * (s-a) * (s-b) * (s-c))
    let areaValue = S * (S - a) * (S - b) * (S - c);
    return Math.sqrt(areaValue);
}

// --- TESTING THE FUNCTIONS ---
console.log("1. Power (2^3):", power(2, 3)); 
console.log("2. Leap Year Check (2024):", isLeapYear(2024));
console.log("3. Area of Triangle (3, 4, 5):", calculateArea(3, 4, 5));

// --- Question 4: Marks, Average & Percentage ---
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}

function calculatePercentage(a, b, c) {
    let total = 300; // Assuming 100 marks per subject
    return ((a + b + c) / total) * 100;
}

function mainFunction(m1, m2, m3) {
    let avg = calculateAverage(m1, m2, m3);
    let per = calculatePercentage(m1, m2, m3);

    console.log("--- Result ---");
    console.log("Average:", avg.toFixed(2));
    console.log("Percentage:", per.toFixed(2) + "%");
}

// --- Question 5: Custom indexOf ---
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

// --- Question 6: Remove Vowels ---
function removeVowels(sentence) {
    let limitedStr = sentence.substring(0, 25);
    let result = "";
    let vowels = "aeiouAEIOU";

    for (let char of limitedStr) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    return result;
}

// --- Question 7: Successive Vowels Count ---
function countSuccessiveVowels(text) {
    let count = 0;
    let str = text.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
        let char1 = str[i];
        let char2 = str[i + 1];

        switch (char1) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                if ("aeiou".includes(char2)) {
                    count++;
                }
                break;
        }
    }
    return count;
}

// --- Testing All Functions ---
console.log("Q4 Test:");
mainFunction(75, 80, 90);

console.log("\nQ5 Test (Index of 'w' in 'hello world'):", customIndexOf("hello world", "w"));

console.log("\nQ6 Test (Remove vowels):", removeVowels("This is a test sentence."));

console.log("\nQ7 Test (Successive vowels in 'Pleaase read'):", countSuccessiveVowels("Pleaase read"));

// --- PROBLEM 8: Distance Converter ---
function distanceConverter() {
    let km = parseFloat(prompt("Enter distance between two cities (in km):"));

    if (isNaN(km) || km < 0) {
        console.log("Invalid distance input.");
        return;
    }

    // Four functions for conversion
    const toMeters = (d) => d * 1000;
    const toFeet = (d) => d * 3280.84;
    const toInches = (d) => d * 39370.1;
    const toCentimeters = (d) => d * 100000;

    console.log(`--- Distance Conversion for ${km} km ---`);
    console.log(`Meters: ${toMeters(km)} m`);
    console.log(`Feet: ${toFeet(km).toFixed(2)} ft`);
    console.log(`Inches: ${toInches(km).toFixed(2)} inch`);
    console.log(`Centimeters: ${toCentimeters(km)} cm`);
}

// --- PROBLEM 9: Overtime Pay Calculator ---
function calculateOvertimePay() {
    let hoursWorked = parseInt(prompt("Enter total hours worked by employee:"));

    if (isNaN(hoursWorked) || hoursWorked < 0) {
        console.log("Invalid hours input.");
        return;
    }

    let overtimePay = 0;
    const standardLimit = 40;
    const ratePerHour = 12.00;

    if (hoursWorked > standardLimit) {
        let extraHours = hoursWorked - standardLimit;
        overtimePay = extraHours * ratePerHour;
        console.log(`--- Overtime Details ---`);
        console.log(`Extra Hours Worked: ${extraHours}`);
        console.log(`Total Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);
    } else {
        console.log("No overtime pay. Hours worked are 40 or less.");
    }
}

// Dono functions ko bari-bari call karna
distanceConverter();
calculateOvertimePay();

// User se input lena
let amount = parseInt(prompt("Enter amount to withdraw (e.g., 470):"));

// Calculation logic
let hundredNotes = Math.floor(amount / 100); // Kitne 100 ke notes hain
amount = amount % 100; // 100 ke notes nikalne ke baad bacha hua amount

let fiftyNotes = Math.floor(amount / 50); // Kitne 50 ke notes hain
amount = amount % 50; // 50 ke notes nikalne ke baad bacha hua amount

let tenNotes = Math.floor(amount / 10); // Kitne 10 ke notes hain

// Result ko display karna
console.log(`Hunderd notes: ${hundredNotes}`);
console.log(`Fifty notes: ${fiftyNotes}`);
console.log(`Ten notes: ${tenNotes}`);

// Screen par dikhane ke liye alert
alert(`You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty notes, and ${tenNotes} ten notes.`);