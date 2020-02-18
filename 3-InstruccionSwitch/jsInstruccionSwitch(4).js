function mostrar()
{
//tomo la edad  
	var mesDelAño; 
	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
					console.log("este mes tiene 31 dias");
					break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
				console.log("este mes tiene 30 dias")
					break;
		default:
				console.log("este mes tiene 29 dias")			


	}



}//FIN DE LA FUNCIÓN