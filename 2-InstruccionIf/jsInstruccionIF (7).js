function getValue(val){
	return document.getElementById(val).value;	
}
function Mostrar()
{
	var edad = getValue("edad");
	var estadoCivil = getValue("estadoCivil");
	var menor = edad < 18;
	var soltero = estadoCivil == "Soltero";
	if(menor && !soltero)
		alert("Es muy pequeño para NO ser soltero.");
}