window.onload = function(){ cleanLocalStorage();}

const screen = document.getElementById("screen");
const history = document.getElementById("history");
var newOperation = false;

function addNumber(number){
    if(newOperation){
        screen.innerHTML='';
        newOperation = false;
    }
    screen.innerHTML = screen.innerHTML + number;
    let numberLS = localStorage.getItem('number');

    if(numberLS=='empty'){ localStorage.setItem('number', number);}
    else{ localStorage.setItem('number', numberLS + number);}
}

function addOperation(operation){

    let result = localStorage.getItem('result');
    let number = localStorage.getItem('number');
    let operationLs = localStorage.getItem('operation');

    if(result == 'empty'){
        localStorage.setItem('result', screen.innerHTML);
        localStorage.setItem('number','empty');
        localStorage.setItem('operation', operation);
    }
    else{
        operate(operationLs,Number(result),Number(number));
        if(operation == '='){
            addResult();
            newOperation = true;
        }      
    }
    localStorage.setItem('number','empty');
    if((operation !== '=')){
        screen.innerHTML = screen.innerHTML + operation;
        history.innerHTML = history.innerHTML + screen.innerHTML;
    }
}

function operate(operation,num1,num2){
    switch(operation){
        case '+': localStorage.setItem('result', num1 + num2); break;
        case '-': localStorage.setItem('result', num1 - num2); break;
        case '*': localStorage.setItem('result', num1 * num2); break;
        case '/': if(num2==0){ alert('No se puede dividir por 0'); }
                  localStorage.setItem('result', num1 / num2);
                  break;
        default: return; 
    }
}

function addResult(){
    let result = localStorage.getItem('result');

    if(result !== 'empty'){
         screen.innerHTML = result; 
         history.innerHTML = history.innerHTML + localStorage.getItem('number') +' = '+ localStorage.getItem('result');
        }
    cleanLocalStorage();
}

function cleanCalc(){
    screen.innerHTML = '';
    cleanLocalStorage();
};

function cleanLocalStorage(){
    localStorage.setItem('result', 'empty');
    localStorage.setItem('number', 'empty');
    localStorage.setItem('operation', 'empty');
    history.innerHTML = history.innerHTML + '<br>';
};