/*3. Leer un número determinar si es par o impar e imprimir el mensaje*/

'use strict'

let numero = parseInt (prompt("Ingerese un numero: "))

/* Verificar si el numero es par o impar*/

if(numero % 2 ==0 ) {

alert(`el numero ingresado es par`)
} else {
    alert(`El numero ingresado es impar.`)
}