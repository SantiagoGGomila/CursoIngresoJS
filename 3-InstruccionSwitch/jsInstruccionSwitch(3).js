function mostrar()
{
//tomo la edad  
	var mesDelAño; 

	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case 'Febrero':
				console.log("este mes tiene 29 dias");
				break
		default:
				console.log("este mes tiene 30 dias")				

	}



//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN