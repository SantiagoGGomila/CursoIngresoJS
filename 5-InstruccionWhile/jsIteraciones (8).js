function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta='si';
	var numeroIngresado
	
	

	while(respuesta!="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		suma=positivo+contador;
		multiplicacion=negativo*contador;
		respuesta=prompt("apriete si o de lo contrario continua");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN