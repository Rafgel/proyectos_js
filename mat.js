
function dividir(x){
    a = x % 2 

   

    if( a == 0){
        console.log('el numero es par');
        }
        else{
         console.log('el numero es impar')
        } 
    
}



exports.dividir = dividir;


// ejercicio #14

function sonAnagramas(cadena1, cadena2) {
  
    if (cadena1.length !== cadena2.length) {
      return false;
    }
  

    var arreglo1 = cadena1.split('').sort();
    var arreglo2 = cadena2.split('').sort();
  
  
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] !== arreglo2[i]) {
        return false;
      }
    }
  
    
    return true;
  }
  
 
  const cadena1 = 'jabon';
  const cadena2 = 'banjo';
  if (sonAnagramas(cadena1, cadena2)) {
    console.log(`${cadena1} y ${cadena2} son anagramas`);
  } else {
    console.log(`${cadena1} y ${cadena2} no son anagramas`);
  }
