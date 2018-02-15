function Mostrar(){
	//tomo el mes
	var mes = document.getElementById('mes').value;
	
	switch(mes){
		case "Febrero":
					  alert("Tiene 28 dias");
					  break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
					  alert("Este tiene 30 dias");
					  break;
		default:
					  alert("Este mes tiene 31 dias");
					  break;	  
		
	}
}//FIN DE LA FUNCIÓN