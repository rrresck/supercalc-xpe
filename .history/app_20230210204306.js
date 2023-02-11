let sumRes = document.getElementById("sum");
let subtractARes = document.getElementById("minusA");
let subtractBRes = document.getElementById("MinusB");
let multiplicationRes = document.getElementById("multiplication");
let divisionARes = document.getElementById("divisionA");
let divisionBRes = document.getElementById("divisionB");
let powerARes = document.getElementById("powerA");
let powerBRes = document.getElementById("powerB");
let squareARes = document.getElementById("squareA");
let squareBRes = document.getElementById("squareB");
let factorialARes = document.getElementById("factorialA");
let factorialBRes = document.getElementById("factorialB");
let percentageARes = document.getElementById("percentageA");
let percentageBRes = document.getElementById("percentageB");
let averageRes = document.getElementById("average");

sumRes.innerHTML = 0;
subtractARes.innerHTML = 0;
subtractBRes.innerHTML = 0;
multiplicationRes.innerHTML = 0;
divisionARes.innerHTML = 0;
divisionBRes.innerHTML = 0;
powerARes.innerHTML = 0;
powerBRes.innerHTML = 0;
squareARes.innerHTML = 0;
squareBRes.innerHTML = 0;
factorialARes.innerHTML = 0;
factorialBRes.innerHTML = 0;
percentageARes.innerHTML = 0;
percentageBRes.innerHTML = 0;
averageRes.innerHTML = 0;

const sum = (a, b) => {
    sumRes.innerHTML = a + b;
}

const subtraction = (a, b) => {
    subtractARes.innerHTML = a - b;
    subtractBRes.innerHTML = b - a;
}

const multiplication = (a, b) => {
    multiplicationRes.innerHTML = a * b;
}

const division = (a, b) => {
    divisionARes.innerHTML = (a / b).toFixed(2);
    divisionBRes.innerHTML = (b / a).toFixed(2);
}

const power = (a, b) => {
    powerARes.innerHTML = Math.pow(a, b);
    powerBRes.innerHTML = Math.pow(b, a);
}

const squareRoot = (a, b) => {
    squareARes.innerHTML = Math.sqrt(a).toFixed(2);
    squareBRes.innerHTML = Math.sqrt(b).toFixed(2);
}

const factorial = (a, b) => {
    if (a < 19) {
        let factorialAvalue = 1;

        for (var i = a; i > 1; i--) {
            factorialAvalue *= i;
            console.log('factorialAvalue', factorialAvalue)
        }
        factorialARes.innerHTML = factorialAvalue;
    } else {
        factorialARes = 'Valor MUITO grande';
    };

    if (b < 19) {
        let factorialBvalue = 1;

        for (var i = b; i > 1; i--) {
            factorialBvalue *= i;
            console.log('factorialBvalue', factorialBvalue)
        }
        factorialBRes.innerHTML = factorialBvalue;
    } else {
        factorialBRes = 'Valor MUITO grande';
    }; 
}

const percentage = (a, b) => {
    percentageARes.innerHTML = ((b * 100)/a).toFixed(0) +'%';
    percentageBRes.innerHTML = ((a * 100)/b).toFixed(0) +'%';
}

const average = (a, b) => {
    averageRes.innerHTML = (a + b)/2;
}

function calculate = () => {
    let aInput = document.getElementById("firstNumber").value;
    let bInput = document.getElementById("secondNumber").value;

    let a = parseInt(aInput);
    let b = parseInt(bInput);

    sum(a, b);
    subtraction(a, b);
    multiplication(a, b);
    division(a, b);
    power(a, b);
    squareRoot(a, b);
    factorial(a, b);
    percentage(a, b);
    average(a, b);
}