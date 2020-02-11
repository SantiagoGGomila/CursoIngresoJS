function mostrar()
{
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
	{
		alert("usted es mayor de edad");
	}
	else
	{
		alert("usted es menor de edad");
	}
}//FIN DE LA FUNCIÓN

//el else no lleva logica