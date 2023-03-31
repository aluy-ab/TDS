function add(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let result = parseInt(num1) + parseInt(num2); 
    document.getElementById("result").value = result; 
}

function sub(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let result = parseInt(num1) - parseInt(num2);
    document.getElementById("result").value = result;
}

function mult(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").value = result;
}

function div(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    if(num2 == 0){
        alert("Número 2 não pode ser zero na operação '/'")
    } else{
        let result = parseFloat(num1) / parseFloat(num2);
        document.getElementById("result").value = result;
    }
}