
var sumando_anterior;
var sumar = false;
var result = 0;

function Change (sumando){
	var num = document.getElementById ("box");
	num.innerHTML = sumando;
}

function Sumar (){
	sumar = true;
}

function Add_Sumando (sumando){		
	Change (sumando);
	if (sumar === true){
		result = parseInt (sumando,2) + sumando_anterior;		
		if (result === 2){
			result = 10;
		}
	}else{
		sumando_anterior = parseInt(sumando,2);
	}
}

function Result (){
	Change (result);
	sumar = false;
}