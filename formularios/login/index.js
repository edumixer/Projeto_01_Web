var dados = [];
var banco = window.localStorage;

$(document).ready(function() {
    $("#salvar-formulario").click(function() {
        document.querySelector('#form_login').submit();
    })
    
    $("#cadastrar-formulario").click(function () {
        window.location.href = "../cadastro/index.php";
    });        
    
});