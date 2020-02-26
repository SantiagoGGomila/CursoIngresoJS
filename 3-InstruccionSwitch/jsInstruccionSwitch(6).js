function mostrar()
{
//tomo la edad  
	var laHora; 
	laHora= document.getElementById('hora').value;
	laHora=parseInt(laHora);

	switch(laHora)
	{
		case 7,8,9,10,11
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
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
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