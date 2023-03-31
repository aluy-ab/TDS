function maskDate(){
    let numChar = document.getElementById("data").value.length;
    if(numChar == 2 || numChar == 5){
        document.getElementById("data").value = document.getElementById("data").value + "/";
    }
}

function changeFoto(){
    document.getElementById("foto").setAttribute("src","imgs/o-gato.avif");
}

function changeFoto2(){
    document.getElementById("foto").setAttribute("src","imgs/o-gato-bravo.jpg");
}

//Higher-Order Function: passada por parâmetro
function run(fn){
    fn();
}

function imprime(){
    console.log("Olá");
}

run(imprime);

//Higher-Order Function: retornada
//técnica de Curring
function precoFinal(taxa){
    return function(preco){
        return preco * (1 + taxa);
    }
}

let x = precoFinal(0.085);

console.log(x(25.1));