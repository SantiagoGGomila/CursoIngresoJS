function mostrar()
{

	var contador=0;
	var maximo
	var minimo
	var respuesta='si';


	while(respuesta!='no')
	{
		contador=contador+1
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(contador==1)
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}else
		{
			if(numeroIngresado>maximo)
			{
				contador=contador+1
			}if (numeroIngresado=minimo)
			{
				minimo=numeroIngresado;
			}
		}		
		respuesta=prompt("ingrese si o de lo contrario sale");
	}
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;

}




