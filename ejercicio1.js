function mensaje(){
    console.log('Hola mundo')
    return
}

mensaje() 

/* function  mensajePersonalizado(nombre){
    nombre = 'camila'
    console.log(`Hola ${nombre}`) 
    return
}

mensajePersonalizado() */

function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
mostrarHolaNombre("Alice");



/* function  dobleDeNumero(numero){
    numero = 14
    console.log(parseInt(numero * 2)) 
    return
}

dobleDeNumero()
 */

function calcularDoble(numero) {
    return numero * 2;
  }
  
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);


/* function  promedio(valor1, valor2, valor3){
    valor1 = 20
    valor2= 30
    valor3 = 40
    console.log((valor1 + valor2 + valor3) / 4) 
    return
}

promedio() */

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

/* function  numeroMayor(num1, num2){
    num1 = 10
    num2 = 25
    if(num1 > num2){
        console.log(`El numero mayor es ${num1}`)
    }else{
        console.log(`El numero mayor es ${num2}`)
    }
    console.log() 
    return
} 
numeroMayor()
*/


function encontrarMayor(a, b) {
    return a > b ? a : b;
}  
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);


/* function numeroMultiplicado (numero){
    numero = 2
    console.log(numero * numero) 
    return
}

numeroMultiplicado()  */

function cuadrado(numero) {
    return numero * numero;
}
  
let resultado = cuadrado(2);
console.log(resultado);