function Mostrar(){
	var numero = parseInt(prompt("Ingrese un numero"));
	var esPrimo = true;
	for(var i = 2; i < numero; i++){
		if(numero % i == 0){
			esPrimo = false;
			break;
		}
	}
	var txt = esPrimo ? " " : " no ";
	console.log("El numero " + numero + txt + "es primo.");
}//FIN DE LA FUNCIÓN