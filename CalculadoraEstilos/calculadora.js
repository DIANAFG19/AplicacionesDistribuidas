function enviar(num){
	var anterior = document.getElementById("pantalla").value;
	document.getElementById("pantalla").value = anterior + num;
	var numero1 = document.getElementById("pantalla").value;
	var operador = num;
	/*if(operador == "+" || operador == "-" || operador == "/" || operador == "*" || operador == "="){
		realizarOperacion(operador,numero1);
		document.getElementById("pantalla").value = "";
	}
}

function limpiar(vacio){
	document.getElementById("pantalla").value = vacio;
}

function calcular(operador,numero1){
	if(operador == "+"){
		var resultado = numero1 + numero1;
		document.getElementById("pantalla").value = resultado;
	}*/	

}