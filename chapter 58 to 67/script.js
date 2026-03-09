// --- Question 1 Solutions ---

// i. Get element of id "main-content" and assign to a variable
var mainContent = document.getElementById("main-content");

// ii. Display all child elements of "main-content" element
console.log("Child elements of main-content:", mainContent.children);

// iii. Get all elements of class "render" and show their innerHTML
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
    console.log("InnerHTML of .render:", renderElements[i].innerHTML);
}

// iv. Fill input value whose element id is "first-name"
document.getElementById("first-name").value = "Alex";

// v. Repeat part iv for id "last-name" and "email"
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";


// --- Question 2 Solutions ---

// i. What is node type of element having id "form-content"
var formContent = document.getElementById("form-content");
console.log("Node type of form-content:", formContent.nodeType);

// ii. Show node type of element having id "lastName" and its child node
var lastNameElement = document.getElementById("lastName");
console.log("Node type of lastName:", lastNameElement.nodeType);
console.log("Node type of its child node:", lastNameElement.childNodes[0].nodeType);

// iii. Update child node of element having id "lastName"
lastNameElement.childNodes[0].nodeValue = "Last Name: Updated";

// iv. Get First and last child of id "main-content"
console.log("First child:", mainContent.firstElementChild);
console.log("Last child:", mainContent.lastElementChild);

// v. Get next and previous siblings of id "lastName"
console.log("Next sibling:", lastNameElement.nextElementSibling);
console.log("Previous sibling:", lastNameElement.previousElementSibling);

// vi. Get parent node and node type of element having id "email"
var emailInput = document.getElementById("email");
console.log("Parent node of email:", emailInput.parentNode);
console.log("Node type of email element:", emailInput.nodeType);