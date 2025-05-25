const calScreen = document.querySelector(".cal-screen");
const calButton = document.querySelectorAll(".btn");

let currentInput ="";
let previousInput ="";
let operation ="";
console.log("buttonNumber:", calButton.length);
calButton.forEach((calButton) => {
calButton.addEventListener('click',addNum);
});
function addNum(event) {

    const clicked = event.target.closest("button");

        if (!clicked) return;
   
        if (clicked.classList.contains("btn-number")) {
        calScreen.value += clicked.textContent;
        } else if (clicked.classList.contains("btn-c")) {
        calScreen.value = "";
        currentInput ="";
        previousInput ="";
        operation ="";
        } else if (clicked.classList.contains("btn-operation")) {
            let newOperation = clicked.textContent;
            if (newOperation === "×") {
                newOperation = "*";
            } else if (newOperation === "÷") {
                newOperation = "/";
            }

            if (previousInput !== "" && operation!=="") {
                console.log("doubleOperation loop");
                currentInput = calScreen.value;
                console.log("currentInput is",currentInput);
                let result = eval(previousInput+operation+currentInput);
                previousInput = result;
                console.log("previousInput is",previousInput);
                calScreen.value = "";
            } else {
                previousInput = calScreen.value;
                calScreen.value = "";
            }
            operation = newOperation;
            console.log("operation is",operation);
         } else if (clicked.classList.contains("btn-equals")) {
        currentInput = calScreen.value;
        console.log("currentInput is",currentInput);
        let result = eval(previousInput+operation+currentInput);
        calScreen.value = result;
        }
}
