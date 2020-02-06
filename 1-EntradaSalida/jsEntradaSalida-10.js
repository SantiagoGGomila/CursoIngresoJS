/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var costo;
	var descuento;
	var descuentoRealizado;
	
	costo=document.getElementById('importe').value;
	costo=parseInt(costo);

	descuento=25/100; //cuando es descuento o aumento va primero el porcentaje en este caso 25//

	
	/*en caso de descuentos por porcentaje o aumento por porcentaje poner el getelementbyid abajo de
	descuentoRealizado=costo-costo*descuento;
	descuentoRealizado=parseInt(descuentoRealizado);*/
	descuentoRealizado=costo-costo*descuento;
	descuentoRealizado=parseInt(descuentoRealizado)
	document.getElementById('resultado').value=descuentoRealizado;
	

	console.log(descuentoRealizado);
}
