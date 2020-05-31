var numberbttn = document.getElementsByClassName("number-bttn");
var screen = document.getElementById("screen");



var opbttn = document.getElementsByClassName("op-bttn");
var resultbttn = document.getElementById("resultado-bttn");

function addNumber(number){
    screen.innerHTML = screen.innerHTML+number;
};




opbttn.onclick = function(){

    //añadir simbolo a screen
    document.getElementById("screen").innerHTML = opbttn.value;

    //si num2 contiene valor, 
        //realizar operacion guardar en num1
        //elminar valor op, eliminar valor num2
        //añadir valor a op nuevo
     
    //guardar en localStorage el numero de pantalla

    //añadir simbolo a screen
    document.getElementById("screen").innerHTML = opbttn.value;

    //guardar en localStorage el simbolo 
    
};

resultbttn.onclick = function(){

    document.getElementById("screen").innerHTML= 0;
    //si num2 es vacio
        //finalnum es num1
    //sino
        //hacer operacion 
        //finalnum es resutado
    let resultado = 0;
    document.getElementById("finalNum").innerHTML = resultado;
};


