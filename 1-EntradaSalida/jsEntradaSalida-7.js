/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
  var primerNumero;
  var segundoNumero;
  var resultado

  primernumero=document.getElementById('numeroUno').value;
  console.log(primerNumero);
   primernumero=parseInt(primerNumero);
  segundonumero=document.getElementById('numeroDos').value;
  console.log(segundoNumero);	
  segundonumero=parseInt(segundoNumero);

 	resultado= primernumero+segundonumero;


 	console.log(resultado);
}
function restar()
{
   
}

function multiplicar()
{ 
    

    
}

function dividir()
{
   

}