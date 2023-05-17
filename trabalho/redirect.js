function redirect_login() {
    location.href = "loginpage.html";
}

function redirect_main() {
    location.href = "mainpage.html";
}

function redirect_cadastro() {
    location.href = "cadastropage.html";
}

function redirect_pacotes() {
    alert("Pacotes a serem definidos em breve!");
}

function redirect_acessar() {
    location.href = "acessopage.html"
}

function checkdata() {
    let senha = document.getElementsByClassName("form-control").value;
    if (senha == null) {
        alert("Não é possível entrar sem dados");
    }
}