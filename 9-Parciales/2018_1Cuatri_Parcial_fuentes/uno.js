/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombre;
	var cantidadDePersonas;
	var cantidadDeEstadia;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo; 
	var formaDePagoMasUtilizada;


	respuesta="si";
	contador=0;
	acumulador=0;
	contadorQR=0;
	contadorTarjeta=0;
	contadorEfectivo=0;

	while(respuesta=="si")
	{
		nombre=prompt("ingrese nombre");
		
		do
		{
			cantidadDePersonas=prompt("ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);
		}while(isNaN(cantidadDePersonas) || cantidadDePersonas<1);

		do
		{
			cantidadDeEstadia=prompt("ingrese los dias de estadia");
			cantidadDeEstadia=parseInt(cantidadDeEstadia);
		}while(isNaN(cantidadDeEstadia) || cantidadDeEstadia<1);


		do
		{
			formaDePago=prompt("ingrese la forma de pago");
		}while(!isNaN(formaDePago) || formaDePago!="qr" && formaDePago!="tarjeta" && formaDePago!="efectivo");

		console.log("cantidad de personas: "+ cantidadDePersonas);
		console.log("cantidad de personas: "+ cantidadDeEstadia);
		console.log("forma de pago "+formaDePago);

		if(contador==0||maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonas=nombre;
		}

		if(contador==0||maximoDeDias<cantidadDeEstadia) //para sacar la cantidad de personas
		{
			maximoDeDias=cantidadDeEstadia;
			maximoDeDiasCantidadDePersonas=cantidadDePersonas;
		}

		switch(formaDePago) //para sacar cual fue la forma de pago mas utilizada
		{
			case "efectivo"
				contadorEfectivo++
				break;
			case "tarjeta"
				contadorTarjeta++
				break;
			default;
				contadorQR++
				break;	

		}

		if(contadorEfectivo>contadorTarjeta && contadorEfectivo>contadorQR)
		{
			formaDePagoMasUtilizada="efectivo"
		}else
		{
			if(contadorQR>contadorTarjeta)
			{
				formaDePagoMasUtilizada="qr";
			}else
			{
				formaDePagoMasUtilizada="tarjeta";
			}
		}


		contador++;
		respuesta=prompt("desea continuar?");
	}

	promedio=acumulador/contador;
	console.log("la persona es"+ maximoDePersonasNombre);
	console.log(maximoDeDiasCantidadDePersonas);
	console.log(formaDePagoMasUtilizada);

	document.write("<br>""nombre del huesped con mas invitados"+maximoDePersonasNombre);
	document.write("<br>""maximo de dias y cantidad de personas"+maximoDeDiasCantidadDePersonas)
	document.write("<br>""la forma de pago mas utilizada es "+formaDePagoMasUtilizada);
	document.write("<br>"+promedio);
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