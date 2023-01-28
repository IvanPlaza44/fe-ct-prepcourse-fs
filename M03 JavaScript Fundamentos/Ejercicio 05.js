/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve False.
   // Tu código:
   if (num >= 1){
      return "Es positivo"
   } else if (num <= -1)
      return "Es negativo"
   else 
      return false
}
esPositivo(-1);

function agregarSimboloExclamacion(str) {   
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return (str + '!');
}
agregarSimboloExclamacion('Hola Mundo');

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return (nombre + " " + apellido);
}
combinarNombres("Ivan", "Plaza");

function obtenerSaludo(nombre) {
   var saludo = 'Hola '
   return saludo + nombre + '!';
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
}
obtenerSaludo("Carlos")

function obtenerAreaRectangulo(alto, ancho) {
   return alto*ancho;
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
}
obtenerAreaRectangulo(40, 10);

function retornarPerimetro(lado) {
   return lado * 4;
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
}
retornarPerimetro(20);

function areaDelTriangulo(base, altura) {
   return (base * altura) / 2;
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
}
areaDelTriangulo(30, 60);

function deEuroAdolar(euro) {
   return euro * 1.20;
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
}
deEuroAdolar(10);

function esVocal(letra) {
   if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
      return "Es vocal"

   } else 
      return "Dato incorrecto";
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
}
esVocal('a');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
