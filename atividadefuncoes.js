// 1- Crie uma função que receba um número e retorne o dobro.
function Dobrar(numero) {
    return numero * 2;
}
console.log(Dobrar(6));

// 2- Crie uma função que receba um número e retorne o triplo.
function triplo(numero) {
    return numero * 3;
}
console.log(triplo(3));
// 3- Crie uma função que receba dois números e retorne a soma.
function somar(a, b ) {
      return a + b ;
}
console.log(somar(7, 4));
// 4- Crie uma função que receba dois números e retorne a multiplicação.
function multiplicação(a, b) {
    return a * b ;
}
console.log(multiplicação(5, 13))
// 5- Crie uma função que receba um salário e calcule aumento de 10%. 
function aumentosalário(salarioatual, porcentagem){
    return salarioatual * (1+ porcentagem); 
}
console.log(aumentosalário(2000, 0.10));
// 6 - Crie uma função que imprima números de 1 até 10.
function imprimirNumeros(i) {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
imprimirNumeros();
// 7- Crie uma função que some todos os números até 10.
function soma() {
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma  + i ; 
    } 
    return soma;
}
console.log(soma());

