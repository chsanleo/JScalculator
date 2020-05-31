
//
window.onload = function(){
    localStorage.setItem('firstNumber', 'a');
    localStorage.setItem('operation', 'a');
}

var screen = document.getElementById("screen");
var history = document.getElementById("history");
var resultbttn = document.getElementById("resultado-bttn");


function addNumber(number){
    screen.innerHTML = screen.innerHTML + number;
};

function addOperation(operation){
    let firstNumberLS = localStorage.getItem('firstNumber');
    let operationLS = localStorage.getItem('operation');

    let result;

    if(firstNumberLS ==='a'){

        localStorage.setItem('firstNumber', screen.innerHTML);
        localStorage.setItem('operation', operation);
        screen.innerHTML = screen.innerHTML + operation;
        return;
    }

    let secondNumber = screen.innerHTML.replace(firstNumberLS,"");
    secondNumber = secondNumber.replace(operationLS,"");

    let num1 = Number(firstNumberLS);
    let num2 = Number(secondNumber);

    switch(operationLS){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        default: return; 
    }
    localStorage.setItem('firstNumber', result);
    localStorage.setItem('operation', operation);
    
    history.innerHTML = history.outerHTML + '=' + screen.outerHTML + operation;
    screen.innerHTML = result + operation;
};

function cleanCalc(){
    screen.innerHTML ="";
    localStorage.setItem('firstNumber', '');
    localStorage.setItem('operation', '');
};