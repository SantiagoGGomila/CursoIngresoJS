function mostrar()
{
//tomo la edad  
	var laHora;
	laHora= document.getElementById('hora').value;
	laHora=parseInt(laHora);
	switch(laHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
				console.log("es de mañana");
				break
		default:
				console.log("es de tarde");


	}

//alert (laHora);
	
	



}//FIN DE LA FUNCIÓN