
//
window.onload = function(){
    localStorage.setItem('result','empty');
}

var screen = document.getElementById("screen");
var history = document.getElementById("history");



function addNumber(number){
    screen.innerHTML = screen.innerHTML + number;
    localStorage.setItem('number',number);
};


function addOperation(operation){
    let result = localStorage.getItem('result');
    let number = localStorage.getItem('number');

    if(isNaN(result)){
        localStorage.setItem('result', screen.innerHTML);
    }
    else{
        let num1 = Number(result);
        let num2 = Number(number);

        switch(operation){
            case '+': localStorage.setItem('result', num1 + num2); break;
            case '-': localStorage.setItem('result', num1 - num2); break;
            default: return; 
        }
    }
    screen.innerHTML = screen.innerHTML + operation;
    history.innerHTML = history.innerHTML + screen.innerHTML;
};

function cleanCalc(){
    screen.innerHTML ='';
    localStorage.setItem('result', 'empty');
};