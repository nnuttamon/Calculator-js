//Select calculator screen
const calScreen = document.querySelector(".cal-screen");
//Select all buttons
const calButton = document.querySelectorAll(".btn");

//Variables for input and operations
let currentInput ="";
let previousInput ="";
let operation ="";

console.log("buttonNumber:", calButton.length);

//Add event listener to all buttons
calButton.forEach((calButton) => {
calButton.addEventListener('click',addNum);
});
function addNum(event) {
    const clicked = event.target.closest("button");
        if (!clicked) return; 
        
        // If number button is clicked → append value
        if (clicked.classList.contains("btn-number")) { 
            calScreen.value += clicked.textContent;
        } 

        // Clear all values if "C" is clicked
        else if (clicked.classList.contains("btn-c")) {
            calScreen.value = ""; //clear calScreen
            currentInput =""; //clear currentInput
            previousInput =""; //clear previousInput
            operation =""; //clear operation
        } 

        // Handle operator buttons (+, −, ×, ÷)
        else if (clicked.classList.contains("btn-operation")) { 
            let newOperation = clicked.textContent;
            
            // Replace × and ÷ with * and / for eval()
            if (newOperation === "×") { 
                newOperation = "*";
            } else if (newOperation === "÷") { 
                newOperation = "/";
            }

            // If already has previous input and operation → calculate before continuing
            if (previousInput !== "" && operation!=="") {
                console.log("doubleOperation loop");
                currentInput = calScreen.value;
                console.log("currentInput is",currentInput);
                let result = eval(previousInput+operation+currentInput); 
                previousInput = result; 
                console.log("previousInput is",previousInput);
                calScreen.value = ""; 
            } else {
                // First operator pressed → store current screen as previous input
                previousInput = calScreen.value; 
                calScreen.value = ""; 
            }

            // Store current operation
            operation = newOperation; 
            console.log("operation is",operation);
         } 

        // Handle "=" button → perform calculation
        else if (clicked.classList.contains("btn-equals")) { 
            currentInput = calScreen.value; 
            console.log("currentInput is",currentInput);
            let result = eval(previousInput+operation+currentInput); 
            calScreen.value = result; 
        }
}
