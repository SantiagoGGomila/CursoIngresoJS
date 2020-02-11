function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>17)
		{
			alert("adulto");	
		}
		else
		{
			if(edad<13)
			{
			  alert("niño";
			}
			else
			{
				alert("adolescente");
			}	
}

/*		if(edad>17)
		{
			adulto	
		}
		else
		{
			if(edad<13)
			{
			  niño	
			}
			else
			{
				adolescente
			}	
		}


	*/