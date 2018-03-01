function Mostrar(){
	var countDiv = 0;
	var numero = parseInt(prompt("Ingrese un numero"));
	console.clear();
	for(var i = 1; i <= numero; i++){
		if(numero % i != 0)
			continue;
		countDiv++;
		console.log(i);
	}
	console.log("Numeros divisores: " + countDiv);
}//FIN DE LA FUNCIÓN