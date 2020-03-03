function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var notaFinal;
	var respuesta;
	var cantidadDeVaronesAprobados;
	var promedioNotasAdolescente;
	var notaMenores;
	var cantidadDeMenoresAprobados;

	respuesta="si"
	cantidadDeVarones=0
	cantidadDeMenoresAprobados=0

	
	
	while(respuesta=="si")

	{

		do
		{
			nombre=prompt("ingrese su nombre");
		}while(!isNaN(nombre));
		
		
		do
		{
			edad=prompt("ingrese su edad");
			edad=parseInt(edad);
		}while(isNaN(edad) || edad<0);

		do
		{
			sexo=prompt("ingrese su sexo");

		}while(sexo!="f" && sexo!="m");

		do
		{
			notaFinal=prompt("ingrese su nota");
			notaFinal=parseInt(notaFinal);
		}while(!isNaN(notaFinal) &&notaFinal<0)

		if(notaFinal>4 && sexo=="m")
		{
			cantidadDeVaronesAprobados++;
		}
		if(edad<18 && notaFinal>4)
		{
			cantidadDeMenoresAprobados++
		}
		

		respuesta=prompt("desea continuar?");
	}

	console.log("su nombre es " +nombre);
	console.log("su edad es "+ edad);
	console.log("su sexo es" + sexo);
	console.log("su nota final es "+ notaFinal);
}


/*
	enunciado agregar enunciados por ejemplo altura o estado civil, persona con mejor nota etc.

	pregunta:
	definir variable (contadores para contar mujeres niños y hombres)
	validar
	logica (if)
*/