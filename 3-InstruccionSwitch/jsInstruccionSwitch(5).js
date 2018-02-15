function Mostrar()
{
	//tomo la hora 
	var laHora = document.getElementById('hora').value;
	if(isNaN(laHora) || laHora > 23 || laHora < 0){
		alert("Erroneo!!");
	}
	else if(laHora > 6 && laHora < 12) {
		alert("Es de mañana");
	}
}//FIN DE LA FUNCIÓN