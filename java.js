// Get the input box element to display the expression or result
let input = document.getElementById("inputBox");

// Select all calculator buttons
let buttons = document.querySelectorAll("button");

// Initialize an empty string to hold the user's input
let string = "";

// Convert the NodeList of buttons into an array for iteration
let arr = Array.from(buttons);
// Add an event listener to each button
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        // Check if the "=" button is clicked
        if (e.target.innerHTML == "=") {
            try {
                // Evaluate the mathematical expression in the string
                string = eval(string);
                input.value = string; // Display the result
            } catch (error) {
                input.value = "Error";
                string = ""; // Reset the string for a fresh start
                setTimeout(() => input.value = "", 1000);
            }
        } 
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } 
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);// 0 is the beginning ,string.length  ending index is one less than the total length of the string,and delete the last character.
            input.value = string;
        } 
        // For other buttons, add the clicked value to the string
        else {
            string += e.target.innerHTML;//get the text whatever user's clicked on the  button.
            input.value = string; // Update the display
        }
    });
});


