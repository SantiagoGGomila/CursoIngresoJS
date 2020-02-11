function mostrar()
{
	var edad
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad<13)
	{
		alert("usted es un adolescente");
	}
	if(edad>17)
	{
		alert("usted es mayor");
	}

		

}//FIN DE LA FUNCIÓN