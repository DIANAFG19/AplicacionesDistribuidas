var numero1=0;
var numero2=0;
var resultado=0;

function capturar(){
	numero1=parseInt(document.getElementById('numero1').value);
	numero2=parseInt(document.getElementById('numero2').value);
}

function suma(){
	capturar();
	resultado=numero1+numero2;
	document.getElementById('resultado').innerHTML=resultado;
}

function resta(){
	capturar();
	resultado=numero1-numero2;
	document.getElementById('resultado').innerHTML=resultado;
}

function multiplicacion(){
	capturar();
	resultado=numero1*numero2;
	document.getElementById('resultado').innerHTML=resultado;
}

function division(){
	capturar();
	resultado=numero1/numero2;
	document.getElementById('resultado').innerHTML=resultado;
}