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
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
				console.log("es de tarde");
				break
		case 20:
		case 21:
		case 22:
		case 23:
		case 23:
		case 24:
				console.log("es de noche");
				break
		default:
				console.log("no es un horario salame");		



	}




}//FIN DE LA FUNCIÓN