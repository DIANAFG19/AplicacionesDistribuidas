function validarUsuario(){
	var usuario = document.getElementById("usuario").value;
	var password = document.getElementById("password").value;
	if(usuario == "admin"){
		if(password == "12345"){
			document.getElementById("pantallaLogin").style.display = "none";
			document.getElementById("bienvenido").style.display = "block";
		}
		else{
			alert("Contraseña Incorrecta");
		}
	}
	else{
		alert("Usuario Incorrecto");
	}
}