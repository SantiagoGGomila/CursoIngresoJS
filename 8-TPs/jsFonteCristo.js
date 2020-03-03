/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
	var numero;
	var contadorPar;

	numero=document.getElementById('numero').value;
	numero=parseInt(numero);

	contadorPar=0

	for(numero=numero;numero>0;numero--)
	{
		if(numero%2==0)
		{
			console.log("su numero es"+numero+"Y es par");
			contadorPar++
		}
	}
 	
}
function NumerosImpares ()
{
	var	numero;
	var contadorImpar;

	numero=document.getElementById('numero').value;
	numero=parseInt(numero);

	contadorImpar=0

	for(numero=numero;numero>0;numero--)
	{
		if(numero%2!=0)
		{
			console.log("el numero es "+numero+ "y es impar")
			contadorImpar++
		}
	}


}
function NumerosDivisibles()
{
	var numero;
	var dividendo;

	numero=document.getElementById('numero').value;
	numero=parseInt(numero);

	for(dividendo=1;dividendo<101;dividendo++)
	{
		if(dividendo%numero==0)
		{
			console.log("el numero "+dividendo+"se divide por "+ numero);
		}
	}

}
function VerificarPrimo ()
{
	var numero;
	var i;
	var bandera;

	numero=document.getElementById('numero').value;
	numero=parseInt(numero);

	bandera=0;

	for(i=2;i<numero;i++)
	{
		if(numero%i==0)
		{
			bandera=1;
			break;
		}
	}
	if(bandera==0)
	{
		console.log("el numero primo es"+numero);
	}else
	{
		console.log(numero+"no es primo");
	}
	
}

function NumerosPrimos () 
{
	var numero;
	var i;
	var bandera;
	var contador;

	numero=document.getElementById('numero').value;
	numero=parseInt(numero);

	bandera=0;
	contador=0

	for(numero=numero;numero>-1;numero--)
	{
		for(i=2;i<numero;i++)
		{
			if(numero%i==0)
		{
			bandera=1;
			break;
		}else
		{
			bandera=0;
		}
	}
	if(bandera==0)
	{
		console.log("el numero primo es"+numero);
		contador++;
		console.log("los primos son"+ contador)
	}
}
}