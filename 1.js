function calculator(number1, number2, operation) {
    switch (operation) {
        case "+": return number1 + number2;
        case "-": return number1 - number2;
        case "*": return number1 * number2;
        case "/": return number1 / number2;
        default: return "Invalid operation";
    }
}
