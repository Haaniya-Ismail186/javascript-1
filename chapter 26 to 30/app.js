// --- Question 1: Positive Floating Point ---
let posInput = prompt("Enter a positive number (e.g., 3.45214):");
let posNum = parseFloat(posInput);

document.write("<h3>Question 1: Positive Number</h3>");
document.write("number: " + posNum + "<br>");
document.write("round off value: " + Math.round(posNum) + "<br>");
document.write("floor value: " + Math.floor(posNum) + "<br>");
document.write("ceil value: " + Math.ceil(posNum) + "<br>");

document.write("<hr>"); // Separator line

// --- Question 2: Negative Floating Point ---
let negInput = prompt("Enter a negative number (e.g., -2.673):");
let negNum = parseFloat(negInput);

document.write("<h3>Question 2: Negative Number</h3>");
document.write("number: " + negNum + "<br>");
document.write("round off value: " + Math.round(negNum) + "<br>");
document.write("floor value: " + Math.floor(negNum) + "<br>");
document.write("ceil value: " + Math.ceil(negNum) + "<br>");

// --- QUESTION 3: Absolute Value ---
let absInput = prompt("Enter a number for absolute value (e.g., -4):");
let absNum = parseFloat(absInput);
let absoluteResult = Math.abs(absNum);

document.write("<h3>Question 3: Absolute Value</h3>");
document.write("The absolute value of " + absNum + " is " + absoluteResult);
document.write("<hr>");

// --- QUESTION 4: Dice Simulator ---
// Math.random() 0 se 1 ke beech value deta hai, 6 se multiply karke 1 add karne se 1-6 milta hai
let diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<h3>Question 4: Dice Simulator</h3>");
document.write("random dice value: " + diceValue);

// --- QUESTION 5: Coin Toss Simulator ---
// 1 ya 2 generate karne ke liye
let coinValue = Math.floor(Math.random() * 2) + 1;
let resultText = (coinValue === 2) ? "Heads" : "Tails";

document.write("<h3>Question 5: Coin Toss</h3>");
document.write(coinValue + "<br>");
document.write("random coin value: " + resultText);
document.write("<hr>");


// --- QUESTION 6: Random Number (1 to 100) ---
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("<h3>Question 6: Random Number 1-100</h3>");
document.write("random number between 1 and 100: " + randomNumber);

// --- QUESTION 7: Weight Parser ---
let weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kilograms):");
// parseFloat() text mein se sirf shuruati numbers nikal leta hai
let parsedWeight = parseFloat(weightInput); 
document.write("The weight of user is " + parsedWeight + " kilograms<br><hr>");

// --- QUESTION 8: Secret Number Game ---
let secretNumber = Math.floor(Math.random() * 10) + 1; // 1 se 10 ke darmiyan
let userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert("Try again! The secret number was " + secretNumber);
}