document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let firstOperand = "";
    
    function updateDisplay(value) {
        display.textContent = value.substring(0, 10); // Limit display length for better performance
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (button.classList.contains("clear")) {
                currentInput = "";
                firstOperand = "";
                operator = "";
                updateDisplay("0");
            } else if (button.classList.contains("operator")) {
                if (currentInput !== "") {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = "";
                }
            } else if (button.classList.contains("equal")) {
                if (firstOperand !== "" && currentInput !== "") {
                    let result;
                    const num1 = parseFloat(firstOperand);
                    const num2 = parseFloat(currentInput);
                    
                    switch (operator) {
                        case "+":
                            result = num1 + num2;
                            break;
                        case "−":
                            result = num1 - num2;
                            break;
                        case "×":
                            result = num1 * num2;
                            break;
                        case "÷":
                            result = num2 !== 0 ? num1 / num2 : "Error";
                            break;
                        case "%":
                            result = num1 % num2;
                            break;
                        case "^":
                            result = Math.pow(num1, num2);
                            break;
                        default:
                            result = "Error";
                    }
                    updateDisplay(result.toString());
                    currentInput = result.toString();
                    firstOperand = "";
                    operator = "";
                }
            } else {
                if (currentInput === "0" && value !== ".") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                updateDisplay(currentInput);
            }
        });
    });
});
