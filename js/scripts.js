function add(number, number2){
    return number+number2;
}

function subtract(number, number2){
    return number - number2;
}

function multiply(number, number2){
    return number * number2;
}

function divide(number, number2){
    return number / number2;
}

function operate(operator, num, num2){
    switch(operator){
        case 'addition':
            return add(num, num2);
        case 'subtraction':
            return subtract(num, num2);
        case 'multiplication':
            return multiply(num, num2);
        case 'division':
            return divide(num, num2);
        default:
            break;
    }
}