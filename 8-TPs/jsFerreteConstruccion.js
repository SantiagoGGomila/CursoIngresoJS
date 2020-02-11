/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var base;
	var altura;
 	var perimetro;
	var alambre;
	 


	 base=document.getElementById('Ancho').value;
	 base=parseint(base);

	 altura=document.getElementById('Largo').value;
	 altura=parseint(altura);

	 perimetro=base*2+altura*2;

	 alambre=perimetro*3;
	 getElementById('Radio').value=alambre;


	 console.log(alambre);

	 

}
function Circulo () 
{
	var radio;
	var circunferencia;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);


	circunferencia=2*Math.PI*radio;
	

	console.log(circunferencia);



	

	 

}


function Materiales () 
{
}
