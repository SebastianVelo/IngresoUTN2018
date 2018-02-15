function Mostrar()
{
	var nota = Math.random() * 10;
	nota = Math.floor(nota) + 1;
	var msj = nota < 4 ? "La proxima se puede" : "Aprobó!";
		msj = nota > 8 ? "Excelente!!" : msj;
	if(confirm(nota + "  " + msj))
		Mostrar();
}//FIN DE LA FUNCIÓN