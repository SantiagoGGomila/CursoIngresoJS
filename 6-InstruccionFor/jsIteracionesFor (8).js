function mostrar()
{
	var numeroIngresado;
	var i
	var bandera

	bandera=0
	

	numeroIngresado=prompt("ingrese un numero");

	for(i=2;i<numeroIngresado; i++)
	{
		console.log(i);
		if(numeroIngresado%i==0)
		{
			bandera=1
		}	
	}
		if(bandera==0)
		{
			alert("es primo");
		}else
		{
			alert("no es primo wachen");
		}

		






}//FIN DE LA FUNCIÓN