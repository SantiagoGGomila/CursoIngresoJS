function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador++)
	{
		numeroIngresado=prompt("ingrese numero menor a 6");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN