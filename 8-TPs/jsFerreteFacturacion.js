/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var tercerPrecio;
	var resultado;
	

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	resultado=precioUno+precioDos+tercerPrecio;

	alert("su resultado es "+ resultado);

	
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var tercerPrecio;
	var resultado;
	var promedio

	

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);

	resultado=precioUno+precioDos+tercerPrecio;

	promedio=resultado/3

	alert("su resultado es "+ promedio);

	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var tercerPrecio;
	var resultado;
	var iva;
	var impuestoaplicado;

	

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	tercerPrecio=document.getElementById('PrecioTres').value;
	tercerPrecio=parseInt(tercerPrecio);


	resultado=precioUno+precioDos+tercerPrecio;

	iva=21/100;

	impuestoaplicado=resultado+resultado*iva;

	alert(impuestoaplicado);



	
}