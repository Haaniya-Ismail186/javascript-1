var city = "karachi";
var cityName = prompt("what is the city name");

if (city == cityName) {
    console.log("Welcome to city of lights");
} else {
    console.log("Wrong ans");
}
document.write("Welcome to city of lights <br><br>");

var gender = "Male";
var genderName = prompt("what is the gender");

if (gender == genderName) {
    console.log("Good Morning sir");
    document.write("Good Morning sir <br><br>");
} else {
    console.log("Good Morning Maam");
    document.write("Good Morning Maam <br><br>");
}

var signalColor = prompt("Enter signal color");
if (signalColor == "Red") {
    console.log("Must Stop");
    document.write("Must Stop<br><br>");
} else if (signalColor == "Yellow") {
    console.log("Ready to move");
    document.write("Ready to move<br><br>");
} else if (signalColor == "Green") {
    console.log("Move now");
    document.write("Move now<br><br>");
}

var fuel = prompt("Enter a remaining fuel");
if (fuel < 0.25) {
    console.log("Please refill the fuel in your Car");
    document.write("Please refill the fuel in your Car<br><br>");
} else {
    console.log("your car fuel is greator than 0.25 liters");
    document.write("your car fuel is greator than 0.25 liters<br><br>");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    document.write("given condition for variable a is true<br><br>");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
} else {
    document.write("given condition for variable b is False<br><br>");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
    document.write("Condition 2 is true<br><br>");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
    document.write("Condition 4 is true<br><br>");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost Equals");
    document.write("Cost are equals<br><br>");
}

if (true) {
    alert("True");
    document.write("True<br><br>");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
    document.write("car is smaller than cat<br><br>");
}

var sub1 = +prompt("Enter marks of sub1");
var sub2 = +prompt("Enter marks of sub2");
var sub3 = +prompt("Enter marks of sub3");
var totalMarks = +prompt("Enter total marks");

var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, Remarks;

if (percentage >= 80) {
    grade = "A-one";
    Remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    Remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    Remarks = "You need to improve";
} else {
    grade = "Fail";
    Remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks : " + totalMarks + "<br>");
document.write("Marks Obtained : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + Remarks + "<br><br>");

var secretNumber = 7;
var userGuess = +prompt("Guess the secret num (1 to 10)");
if (userGuess == secretNumber) {
    console.log("Bingo! correct answer");
} else if (userGuess + 1 == secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Wrong guess!");
}

var numDiv = +prompt("Enter a num that is divisible by 3");
if (numDiv % 3 === 0) {
    console.log("Number is divisible by 3");
} else {
    console.log("Num is not divisible by 3");
}

var checkEven = +prompt("Enter a num to check Even/Odd");
if (checkEven % 2 === 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}

var temp = +prompt("Enter Temperature");
if (temp > 40) {
    console.log("It is too hot outside");
} else if (temp > 30) {
    console.log("The weather today is normal");
} else if (temp > 20) {
    console.log("Today's weather is cool");
} else if (temp > 10) {
    console.log("OMG! Today's weather is so cool");
} else {
    console.log("It's very cold.");
}

var n1 = +prompt("Enter First Num");
var n2 = +prompt("Enter second Num");
var op = prompt("Enter operator (+, -, *, /, %)");

if (op == "+") {
    console.log(n1 + n2);
} else if (op == "-") {
    console.log(n1 - n2);
} else if (op == "*") {
    console.log(n1 * n2);
} else if (op == "/") {
    console.log(n1 / n2);
} else if (op == "%") {
    console.log(n1 % n2);
} else {
    console.log("invalid operator");
}