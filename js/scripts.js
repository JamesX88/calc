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

function load(){

    let firstNumber;
    let secondNumber;
    let operatorType;

    let numberButtons = document.querySelectorAll('.calc-number');
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let calcDisplay = document.querySelector('.calc-results');
            if (calcDisplay.textContent === '0') {
                return calcDisplay.textContent = button.value;
            } else if(!operatorType){
                calcDisplay.textContent += button.value;
            } else if(operatorType && !secondNumber){
                calcDisplay.textContent = button.value;
                secondNumber = calcDisplay.textContent;
            } else if(operatorType && secondNumber){
                secondNumber += calcDisplay.textContent;
            }
        })
    })

    let operatorButtons = document.querySelectorAll('.calc-operator');
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let calcDisplay = document.querySelector('.calc-results');
            console.log(firstNumber)
            console.log(secondNumber)
            console.log(operatorType)
            if(!operatorType){
                operatorType = button.value;
                firstNumber = calcDisplay.textContent;
            }else if(firstNumber && secondNumber && operatorType){
                let equation = operate(operatorType, firstNumber, secondNumber);
                console.log(equation);
                calcDisplay.textContent = equation;
                firstNumber = equation;
                secondNumber = null;
            }
        })
    })

    let displayClear = document.querySelector('.calc-clear');
    displayClear.addEventListener('click', () => {
        let calcDisplay = document.querySelector('.calc-results');
        calcDisplay.textContent = 0;
        firstNumber = null;
        secondNumber = null;
        operatorType = null;
    })

}
load();