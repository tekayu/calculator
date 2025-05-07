const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".btn-operator")
const clear = document.querySelector(".btn-clear")
const equals = document.querySelector(".btn-equals")

let displayValue = "";
let currOp = "";
let opValue = "";

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if (currOp === "") {
            displayValue += num.textContent;
            display.textContent = displayValue;
            return
        } else {
            opValue += num.textContent
            display.textContent = opValue
            return
        }
    }); 
})

equals.addEventListener("click", () => {
    if (currOp === "") {
        display.textContent = displayValue;
    }
    if (currOp == "+") {
        displayValue = parseInt(displayValue) + parseInt(opValue);
        display.textContent = displayValue;
        currOp == "";
        opValue == "";
    }
    if (currOp == "-") {
        displayValue = parseInt(displayValue) - parseInt(opValue)
        display.textContent = displayValue
        currOp == "";
        opValue == "";
    }
    if (currOp == "*") {
        displayValue = parseInt(displayValue) * parseInt(opValue)
        display.textContent = displayValue
        currOp == "";
        opValue == "";
    }
    if (currOp == "/") {
        displayValue = parseInt(displayValue) / parseInt(opValue)
        display.textContent = displayValue
        currOp == "";
        opValue == "";
    }
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (currOp === "") {
            currOp = operator.getAttribute("id");
        } else {
            opValue = "";
            currOp = operator.getAttribute("id");
        }
    })
})

clear.addEventListener("click", () => {
    displayValue = "";
    opValue = "";
    currOp = "";
    display.textContent = "";
})