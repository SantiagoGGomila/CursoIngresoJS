function mostrar()
{
	var nota;
	nota=Math.floor(Math.random() * 10) + 1
	nota=parseInt(nota);
	if(nota<4)
	{
		alert("desaprobo")
	}
	else
		{
			if(nota>8)
			{
				alert("excelente")
			}
			else
			{
				alert("aprobo")
			}
		}
}//FIN DE LA FUNCIÓN