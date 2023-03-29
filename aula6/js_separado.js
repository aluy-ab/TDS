//DETERMINANDO NOME E IDADE
// let nome = "Ana";
// let idade ="137";
// alert(nome + " tem " + idade + " anos ");

//NOME DIGITADO
//let nome = window.prompt("Digite seu nome:");
//alert("Olá, " + nome);

//NÚMEROS DIGITADOS E SUA SOMA
//let num1 = window.prompt("Digite um número:");
//let num2 = window.prompt("Digite outro número:");
//let soma = parseInt(num1) + parseInt(num2);
//alert("Soma: " + soma);

//CONSOLE: imprime em "inspecionar" e "console"
//console.log("Ola");

//CHAMADA DE FUNÇÃO
//function escrever(nome){
    //DIFERENTES MANEIRAS E IMPRIMIR "Olá, [nome digitado]"
    //console.log(nome);
    //console.log(`Oi, ${nome}`);
    //return `Oi, ${nome}`;
//}

//MANEIRAS DE IMPRIMIR NO CONSOLE DEPENDENDO DA FUNÇÃO
//escrever("Ana");
//let x = escrever("ana");
//console.log(x);

//CHAMADA DE FUNÇÃO ANÔNIMA
//const z = function(a,b,c){
//    return a + b + c;
//}

//IMPRIMIR RESULTADO DE FUNÇÃO ANÔNIMA NO CONSOLE
//console.log( z(2,3,4) );

//FORMA 2 DE FUNÇÃO ANÔNIMA
//const z = (a,b,c) => { 
//    return a + b + c;
//}

//CHAMADA DA FORMA 2 DE FUNÇÃO ANÔNIMA
//const y = z;
//console.log( y(2,3,4) );

//FORMA 3 DE FUNÇÃO ANÔNIMA
//(function(){ 
//    let x = 10;
//    console.log(x);
//})();

function maskDate(){
    let numChar = document.getElementById("data").value.length;
    if(numChar == 2){
        document.getElementById("data").value = document.getElementById("data").value + "/";
    }
}