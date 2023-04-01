const numbers = document.querySelectorAll(".number");

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number)=>{
    // currentNumber = 0
    if(currentNumber==='0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
    
}

numbers.forEach((number) => {
    number.addEventListener('click',(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })
});

const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number)=>{
    calculatorScreen.value = number
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
        inputOperator(event.target.value);
    })
});

const inputOperator = (operator)=>{
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=>{
    calculate()
    updateScreen(currentNumber)
})

const calculate=()=>{
    let result = ''
    prevNumber = parseInt(prevNumber)
    currentNumber = parseInt(currentNumber)
    switch (calculationOperator){
        case "+":
            result = prevNumber + currentNumber
            break;
        case "-":
            result = prevNumber - currentNumber
            break;
        case "*":
            result = prevNumber * currentNumber
            break;
        case "/":
            result = prevNumber / currentNumber
            break; 
        default:
            break;   
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll=()=>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click",(event)=>{
    inputDecimal(event.target.value)
    updateScreen()
})

inputDecimal = (dot)=>{
    currentNumber +=dot
}