
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function equal(a, operator, b) {
    aInt = parseInt(a);
    bInt = parseInt(b);
    switch (operator) {
        case '+':
            return add(aInt, bInt);
        case '-':
            return subtract(aInt, bInt);
        case 'x':
            return multiply(aInt, bInt);
        case '/':
            return divide(aInt, bInt);
        default:
            throw new Error("Invalid operator");
    }
}

function inputNumber(number) {
    const display = document.getElementById("display");
    display.value += number;
}

function inputOperator(operator) {
    const display = document.getElementById("display");
    if (display.value === "") {
        return;
    }
    if(display.value.split(" ").length >= 2){
        return
    }
    display.value += " " + operator+ " ";
}

function calculate(){
    const display = document.getElementById("display");
    const expression = display.value.split(" ");
    try {
        display.value = equal(expression[0], expression[1], expression[2]);
    } catch (error) {
        display.value = error;
    }
}

function clearDisplay(){
    const display = document.getElementById("display");
    display.value = "";
}