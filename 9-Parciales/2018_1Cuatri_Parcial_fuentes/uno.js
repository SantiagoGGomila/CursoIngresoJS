/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped listo
cantidad de personas listo
cantidad de dia de estadia listo 
forma de pago(efectivo , tarjeta o QR) listo
informar el huésped que trajo más personas en
una sola reserva. listo
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserv
*/
function mostrar()
{
	var nombre;
	var cantidadDeDias;
	var cantidadDePersonas;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDeDias;
	var contador;
	var acumulador;
	var contadorEfectivo;
	var contadorTarjeta;
	var contadorQR;
	var formaDePagoMasUtilizada;

	respuesta="s";
	contador=0;
	acumulador=0;
	contadorTarjeta=0;
	contadorEfectivo=0;
	contadorQR=0;

	
	while(respuesta=="s")
	{
		do
		{
			nombre=prompt("ingrese nombre");
		}while(!isNaN(nombre));
		
	
		do
		{
			cantidadDeDias=prompt("ingrese la cantidad de dias");
			cantidadDeDias=parseInt(cantidadDeDias);
		}while(isNaN(cantidadDeDias) || cantidadDeDias<1);

		do
		{
			cantidadDePersonas=prompt("igrese la cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas) || cantidadDePersonas<1);

		do
		{
			formaDePago=prompt("ingrese forma de pago");
		}while(!isNaN(formaDePago) || formaDePago!="QR" && formaDePago!="tarjeta" && formaDePago!="efectivo");

		if(contador==0 || maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonas=nombre;
		}
		if(contador==0 ||maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDias=nombre;
		}
		switch(formaDePago)
		{
			case "efectivo":
				contadorEfectivo++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			default:
				contadorQR++
				break;	
		}

		if(contadorTarjeta>contadorQR && contadorTarjeta>contadorEfectivo)
		{
			formaDePagoMasUtilizada="tarjeta";
		}else
		{
			if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
			{
				formaDePagoMasUtilizada="efectivo";
			}else
			{
				formaDePagoMasUtilizada="qr";
			}

		}







		contador ++;
		acumulador=acumulador+cantidadDeDias;
		respuesta=prompt("quiere seguir introduciendo datos?");
	}
	promedio=acumulador/contador;
	document.write("<br> nombre del huesped con mas invitado: "+maximoDePersonas);
	document.write("<br> cantidad de huespuedes: "+maximoDePersonas);
	document.write("<br> forma de pago mas usada: "+formaDePagoMasUtilizada);
	document.write("<br> promedio: "+promedio);
}


// PARA EL PARCIAL MOSTRAR CON DOCUMENT.WRITE


/*if(contador==0)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonas=nombre;
		}else
		{
			if(maximoDePersonas<cantidadDePersonas)
			{
				maximoDePersonas=cantidadDePersonas;
				maximoDePersonas=nombre;
			}
		}*/