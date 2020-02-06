/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var dinero;
	var aumento;
	var importeAumentado;

	dinero=document.getElementById('sueldo').value;
	dinero=parseInt(dinero);

	aumento=10/100; 
	

	importeAumentado=dinero+(dinero*aumento); //ejemplo 100+100/10

	document.getElementById('resultado').value=importeAumentado;
	

	console.log(importeAumentado);
	
}
