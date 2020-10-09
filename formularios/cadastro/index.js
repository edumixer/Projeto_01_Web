var dados = [];
var banco = window.localStorage;

$(document).ready(function() {
    fLocalEventosCLick();
    var db = banco.getItem("dadosUsuarios")
    if( db !== null) {
        dados = JSON.parse(db);   
    } else {
        dados = [];
    }
function fLocalEventosCLick() {
    $("#salvar-formulario").click(function() {

        fLocalValidaCampos("nome");
        fLocalValidaCampos("email");
        fLocalValidaCampos("senha");
        fLocalValidaCampos("confirma_senha");

        fLocalValidaSenha();
        
        var aux = {};
        aux.nome = $("#nome").val();
        aux.email = $("#email").val();
        aux.senha =  $("#senha").val();
        aux.confirma_senha =  $("#confirma_senha").val();
        
        dados.push(aux);
        
        banco.setItem("dadosUsuarios", JSON.stringify(dados));
        
        if (fLocalValidaTodos()) {
            fLocalLimpaCampos();
            window.location.href = "../login/index.html"
        }

        return false;
    });
}
    
    function fLocalValidaCampos(idCampo) {
        var valor = $("#" + idCampo).val();

        if(valor == "") {
            $("#" + idCampo).addClass("campo-errado");
            return false;
        } else {
            $("#" + idCampo).removeClass("campo-errado");
            return true;
        }
    }

    function fLocalValidaTodos() {
        
        
        if(fLocalValidaCampos("nome") === false) {
            return false;
        }
        if (fLocalValidaCampos("email") === false) {
            return false;
        }
        if (fLocalValidaCampos("senha") === false) {
            return false;
        }
        if (fLocalValidaCampos("confirma_senha") === false) {
            return false;
        }
        if (fLocalValidaSenha() === false) {
            return false;
        }
        else {
            return true;
        }
        
    }   

    function fLocalValidaSenha() {
        var senha = $("#senha").val();
        var confirma_senha = $("#confirma_senha").val();
        
        if(senha != "") {
            if(senha != confirma_senha) {
                $("#confirma_senha").addClass("campo-errado");
                return false;
            }
            else {
                $("#confirma_senha").removeClass("campo-errado");
                return true;
            }
        }
    }

    function fLocalLimpaCampos() {
        $("#nome").val("");
        $("#email").val("");
        $("#senha").val("");
        $("#confirma_senha").val("");
    }
});



