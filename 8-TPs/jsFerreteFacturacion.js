/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function getElements(nam){
	return document.getElementsByName(nam);
}
function getValues(nam){
	var values = 0;
	for(var i = 0; i < getElements(nam).length; i++){
		values += parseFloat(getElements(nam)[i].value);
	}
	return values;
}

function Sumar () 
{
	alert(getValues("precio"));
}
function Promedio () 
{
	alert(getValues("precio") / getElements("precio").length);
}
function PrecioFinal () 
{
	alert(getValues("precio") * 1.21);
}