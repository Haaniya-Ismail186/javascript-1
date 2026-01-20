// --- Task 1: Name Merge aur Greeting ---
var firstName = prompt("Apna pehla naam enter karen:");
var lastName = prompt("Apna aakhri naam enter karen:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");

// --- Task 2: Mobile Model ki Length maloom karna ---
var favPhone = prompt("Apna favorite mobile model likhen:");
var lengthOfInput = favPhone.length;
document.write("My favorite phone is: " + favPhone + "<br>");
document.write("Length of string: " + lengthOfInput + "<br><br>");

// --- Task 3: "Pakistani" mein 'n' ka index dhoondna ---
var word = "Pakistani";
var indexNum = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + indexNum + "<br><br>");

// --- Task 4: "Hello World" mein aakhri 'l' ka index dhoondna ---
var str = "Hello World";
var lastIndex = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Last index of 'l': " + lastIndex);

// --- Task 5: Character at index 3 in "Pakistani" ---
var word = "Pakistani";
// charAt() method kisi makhsoos index par mojood character nikalne ke liye hota hai
var charAt3 = word.charAt(3);

document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charAt3 + "<br><br>");

// --- Task 6: Repeat Q1 using concat() method ---
// Q1 mein humne '+' use kiya tha, yahan hum concat() function use karenge
var firstName = prompt("Apna pehla naam likhen:");
var lastName = prompt("Apna aakhri naam likhen:");

// concat() method do ya zyada strings ko jodne ke liye istemal hota hai
var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");

// --- Task 7: Word Replacement ("Hyder" to "Islam") ---
var city = "Hyderabad";
// replace() pehle milne wale word ko badal deta hai
var replacement = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + replacement + "<br><hr>");

// --- Task 8: Replace all "and" with "&" ---
var message = "Ali and Sami are best friends. They play cricket and football together.";
// replaceAll() poore sentence mein har "and" ko "&" se badal dega
var newMessage = message.replaceAll("and", "&");

document.write("Original Message: " + message + "<br>");
document.write("Updated Message: " + newMessage + "<br><hr>");

// --- Task 9: String to Number Conversion ---
var stringValue = "472";
// Number() function string ko number mein convert karta hai
var numberValue = Number(stringValue);

// Pehli value (String)
document.write("Value: " + stringValue + "<br>");
document.write("Type: " + typeof(stringValue) + "<br>");

// Doosri value (Number)
document.write("Value: " + numberValue + "<br>");
document.write("Type: " + typeof(numberValue));

// --- Task 10: Upper Case ---
var userInput10 = prompt("Enter some text for Upper Case:");
document.write("User input: " + userInput10 + "<br>");
document.write("Upper case: " + userInput10.toUpperCase() + "<br><hr>");

// --- Task 11: Title Case ---
var userInput11 = prompt("Enter some text for Title Case:");
var titleCase = userInput11.slice(0,1).toUpperCase() + userInput11.slice(1).toLowerCase();
document.write("User input: " + userInput11 + "<br>");
document.write("Title case: " + titleCase + "<br><hr>");

// --- Task 12: Dot Removal ---
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + str);

// --- Task 13: Username Validation ---
var username = prompt("Enter your username:");
var isValid = true;
// Special symbols check using ASCII codes
for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);
    if (code === 33 || code === 44 || code === 46 || code === 64) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username");
}

// --- Task 14: Case Insensitive Search in Array ---
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        document.write(userInput + " is available at index " + i + " in our bakery.<br>");
        break;
    }
}
if (!found) {
    document.write("We are sorry. " + userInput + " is not available in our bakery.<br>");
}

// --- Task 15: Password Validation ---
var password = prompt("Enter password:");
var hasAlpha = false;
var hasNum = false;
var startsWithNum = !isNaN(password.charAt(0));

for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) hasAlpha = true;
    if (code >= 48 && code <= 57) hasNum = true;
}

if (password.length < 6 || startsWithNum || !hasAlpha || !hasNum) {
    alert("Please enter a valid password (min 6 chars, alphabets & numbers, no starting with number)");
}

// --- Task 16: String to Array (Split) ---
var university = "University of Karachi";
var uniArray = university.split(""); // Har character ko alag array element banane ke liye
for (var j = 0; j < uniArray.length; j++) {
    document.write(uniArray[j] + "<br>");
}

// --- Task 17: Last Character of Input ---
var userInput17 = prompt("Enter text to see last character:");
var lastChar = userInput17.charAt(userInput17.length - 1);
document.write("User input: " + userInput17 + "<br>Last character of input: " + lastChar);

// --- Task 18: Word Count ---
var text18 = "The quick brown fox jumps over the lazy dog";
var count = 0;
var words = text18.toLowerCase().split(" ");
for (var k = 0; k < words.length; k++) {
    if (words[k] === "the") count++;
}
document.write("Text: " + text18 + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");