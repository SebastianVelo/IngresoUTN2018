function Mostrar(){
	var edad = getValue("edad");
	alert(grupoEtario(edad));	
}

function grupoEtario(edad){
	if(esIncorrecto(edad))
		return "DATOS DE ENTRADA INCORRECTOS";	
	var grupo = esAdulto(edad) ? "ADULTO" : "ADOLESCENTE";
		grupo = esNinio(edad) ? "NIÑO" : grupo;
		grupo = esAdultoMayor(edad)  ? "ADULTO MAYOR" : grupo;
	return "Usted es " + grupo;
}

function esIncorrecto(edad) {
	return isNaN(edad) || edad < 0 || edad > 128;
}

function esNinio(edad){
	return edad < 13;
}
function esAdulto(edad){
	return edad > 17 && edad < 80;
}
function esAdultoMayor(edad){
	return edad > 79;
}

function getValue(val){
	return document.getElementById(val).value;	
}