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