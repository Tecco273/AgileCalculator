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
        case '*':
            return multiply(aInt, bInt);
        case '/':
            return divide(aInt, bInt);
        default:
            throw new Error("Invalid operator");
    }
}