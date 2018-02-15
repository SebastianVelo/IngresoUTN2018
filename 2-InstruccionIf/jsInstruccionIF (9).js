function Mostrar()
{
	var random = Math.random() * 10;
	random = Math.floor(random) + 1;
	if(confirm(random))
		Mostrar();
}//FIN DE LA FUNCIÓN