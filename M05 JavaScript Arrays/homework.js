/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
devolverPrimerElemento([6, 1, 2, 3]);


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}
devolverUltimoElemento([6, 1, 2, 3]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
obtenerLargoDelArray([1, 2, 3, 6])

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   
   return array.map((num) => num +=1);
   
}
incrementarPorUno([1, 2, 3, 6]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
 
}
dePalabrasAFrase(['Hello', 'world!']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   return array.includes(elemento);
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
  suma = arrayOfNums.reduce((A, B) => A + B, 0);
  return suma;
}
agregarNumeros([2,3,5]);


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0
   for (i of resultadosTest) {
      suma = resultadosTest.reduce((A,B) => A + B, 0);
      promedio = suma / resultadosTest.length;
   }
   return promedio;
}
promedioResultadosTest([1,2,3,4,5]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   grande = 0
   for (i of arrayOfNums) {
      if (i > grande) grande = i;
   }
   return grande;

  }
numeroMasGrande([1,2,4,6,5]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   let producto = 1;
   if (arguments.length === 0) return 0;
   else if (arguments.length === 1) return arguments[0];
   else{
   for (let i = 0; i < arguments.length; i++)
   producto = producto * arguments[i];
   return producto;
}
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let arreglo = array.filter((e) => e > 18);
   return arreglo.length;
}
cuentoElementos([20, 50, 1, 30]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana"
   else return "Es dia laboral"
}
diaDeLaSemana(3);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let texto = num.toString();
   let primerNumero = texto.charAt(0);
   if(primerNumero === '9') return true
   else return false
}
empiezaConNueve(99);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   let comparar = array[0];
   for (let i = 1; i < array.length; i++) {
      if(array[i] !== comparar) {
         return false   
      }
      else return true
}
}
todosIguales([1, 2, 1]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses = [];
   for(let i = 0; i < array.length; i++){
      if(array[i] ==='Enero'){
         meses.push(array[i]);
      }
      else if(array[i] ==='Marzo'){
         meses.push(array[i]); 
      }
      else if(array[i] ==='Noviembre'){
         meses.push(array[i]); 
      }
   }
   if(meses.length !== 3){
      return "No se encontraron los meses pedidos"
   }
   return meses;
}



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tabla = [];
   for(let i = 0; i < 11; i++){
      tabla.push(i*6);
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  let mayores = [];
  for(let i =0; i < array.length; i++){
   if(array[i] > 100){
      mayores.push(array[i])
   }   
  }
  return mayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let lista = [];
   let valor = num;

   for(let i = 0; i < 10; i++){
      valor = valor +2;
            
      if(i === valor){
         return "Se interrumpió la ejecución";
         break;
      }
      else {
         lista.push(valor)
      }
   }
   return lista;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let lista = [];
   let valor = num;

   for(let i = 0; i<10; i++){
      if(i === 5){
         continue;}
      else{
         valor = valor+2;
         lista.push(valor);
      }     
   }
   return lista;
}
   


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
