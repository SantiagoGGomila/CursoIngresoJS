function mostrar()
{

	var numero;
	numero=parseInt(numero);
	numero=prompt("ingrese un número entre 0 y 9.");
	//valorDeVerdad=isNaN() todo lo que no es un numero, me va a evaluar el conjunto de verdad

	while(isNaN(numero)||numero< 0 || numero>10)
	{
		numero=prompt("ingrese un número entre 0 y 9.");
	}
	
		
	document.getElementById('Numero').value=numero;
	


}//FIN DE LA FUNCIÓN