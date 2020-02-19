function mostrar()
{

	var sexo;

	sexo=prompt("ingrese masculino o femenino");
	
	while(sexo!="masculino" && sexo!="femenino")
	{
		sexo=prompt("ingrese masculino o femenino");
	}


	
	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN