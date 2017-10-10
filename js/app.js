function isValidCard(){
  var input=prompt('Ingresa el número de tu tarjeta');
  var array=[];//para contener los números invertidos
  var newArr=[]; //para contener los número de posiciones impares multiplicado y los demas
  var sum=0;//inicailizamos la suma en 0
    input.toString(); //convertimos input a string para desmenuzar los números más facilmente

  if(input.length===0){ //validamos que el input no esté vacío
    return('No puedes dejar este campo vacío');
  }
  for(var i=input.length-1;i>=0;i--){ //invertimos los números del input y lo almacenamos en array
    array.push(input[i]);
  }
  for(var j=0;j<array.length;j++){ //multiplicamos los numeros en posiciones impares contando desde 0
    if(j%2===1){
      var multipli=array[j]*2;
      if(multipli>=10){
        var div=Math.floor(multipli/10); //dividimos entre 10 para conseguir la decenas
        var resi=multipli%10;//sacamos el residuo para obtener las unidades
        var newNum=div+resi; //sumamos los dígitos
        newArr.push(newNum); //almacenamos el nuevo numero en newArray
      }
      else{
        newArr.push(multipli);
      }
    }
    else{
      newArr.push(parseInt(array[j]))
    }
  }
  for(var k=0;k<newArr.length;k++){//recorremos el arreglo para obtener la suma de sus elementos
    sum+=newArr[k];
  }

  if(sum%10===0){  //verificamos si es divisible entre 10 mostrar que la tarjeta es valida
    return 'tu número de tarjeta es válido';
  }
  else{
    return 'tu número de tarjeta es inválido';
  }

}

isValidCard(); //llamamos a la función
