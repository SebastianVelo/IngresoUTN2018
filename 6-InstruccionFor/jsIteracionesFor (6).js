function Mostrar(){
	var countPares = 0;
	var numero = parseInt(prompt("Ingrese un numero"));
	console.clear();
	for(var i = 1; i <= numero; i++){
		if(i % 2 != 0)
			continue;
		countPares++;
		console.log(i);
	}
	console.log("Numeros pares: " + countPares);
}//FIN DE LA FUNCIÓN