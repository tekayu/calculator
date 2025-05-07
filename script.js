const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".btn-operator")
const clear = document.querySelector(".btn-clear")
const equals = document.querySelector(".btn-equals")

let displayValue = ""

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        displayValue += num.textContent;
        display.textContent = displayValue;
    });
})

clear.addEventListener("click", () => {
    displayValue = "";
    display.textContent = displayValue;
})

equals.addEventListener("click", () => console.log(displayValue));