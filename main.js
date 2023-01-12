/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/

function nPrimos() {
    
    let primo = [];
    let sum = 0;
    
    for (let i = 2; i <= 100; i++) {
      let esPrimo = true;
      for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        primo.push(i);
        sum += i;
      }
    }
    console.log(primo);
    console.log("suma de primos: " + sum);
  }
  nPrimos();
  
/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/

array1 = [1,4,5,7];
array2 = [2,1,5,1,1];

function sumArray (arrayA, arrayB){

    let sumPosicion = [0];

    for ( let i = 0; ( i < arrayA.length) || ( i < arrayB.length); i++){
        if ( arrayA[i] === undefined){
            arrayA[i]=0;
        }
        if ( arrayB[i] === undefined){
            arrayB[i]=0;
        }
        sumPosicion[i] = arrayA[i] + arrayB[i];
    }
    return console.log(sumPosicion);
};

sumArray(array1, array2);

/* Explicacion: 
Creamos las dos variables, cada una con uno de los arrays.
Declaramos la funcion sumArray con dos argumentos que seran los arrays.
Declaramos una variable sumPosicion que sera el array sumatorio de los arrays argumentos.
Creamos un bucle for de los dos arrays hasta llegar a la longitud mayor de uno de los dos 
usando OR y length.
Establecemos mediante bloques IF que si alguno de los valores del array no existe y declara undefined
le asigne un valor 0, ya que uno de los arrays puede ser mas largo que el otro.
A continuacion establecemos que sumPosicion[i] es igual a la suma de los valores que estan en la misma
posiocion de cada array de los dos arrays argumentados utilizando .[i].
Por ultimo le pedimos que nos devuelva por consola el array generado con la funcion.
*/

/*----------------------------------------------------------------------------------------------------*/

/*
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

let palabra = "ojo";

function esPalindromo (word) {
   
   let wordReverse = word.split('').reverse().join('');
   let palindromo = word === wordReverse;
    
    if (palindromo === true) {
      console.log("Es un palindromo");
    } else {
      console.log("No es un palindromo");
    }
  }
esPalindromo(palabra);

/* Explicacion:
Creamos la variable tipo string que vamos a utilizar para verificar si es un palindromo.
Declaramos la funcion y le asignamos un argumento palabra.
Declaramos una varibale wordReverse que sera una transformacion de string a array de nuestro argumento
con el metodo ( .split('') ), luego le invertimos el orden con el metodo ( .reverse() ) y pior ultimo unimos
los elementos del array y los convertimos en un string con el metodo  ( .join('') ) con los caracteres 
en el orden inverso al arguemnto word.
Despues comprobamos que el resultado sea igual al argmento introducido y en ffuncion de eso evalua como 
true o false y devuelve por consola si es o no un palindromo. 

/*----------------------------------------------------------------------------------------------------*/

/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

let nombresList = ['Pedro', 'Gon', 'Luis', 'Fran'];
let simbolo = "/";
 
function separador (nombres,barra){
   
    let texto = nombresList.toString("");
    console.log (texto.replaceAll("," , "/"));
    
}
separador(nombresList,simbolo);    


/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/


let profesores = [ {id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ];

function verifyId (array){

    let idVerify = [];

    for ( let i = 0; i < array.length; i++){
        if (array[i].id == i){
            idVerify.push(array[i].name);
        
        }
    }
    console.log(idVerify);
}

verifyId(profesores);