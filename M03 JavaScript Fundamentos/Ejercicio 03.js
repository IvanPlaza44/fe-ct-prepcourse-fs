/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:
   if (x == y){
   return true
   } else
   return false;
}
sonIguales(9,12)

function tienenMismaLongitud(str1, str2) {
   if (str1.length == str2.length){
   return true
   } else 
   return false;
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:
}
tienenMismaLongitud('Camion', 'Perros');


function menosQueNoventa(num) {
   return num < 90;
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
}
menosQueNoventa(70);

function mayorQueCincuenta(num) {
   return num>50;
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
}
mayorQueCincuenta(20);

function esPar(num) {
   return num %2==0;
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
}
esPar(6);

function esImpar(num) {
   return num %2==1;
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
}
esImpar(9);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
