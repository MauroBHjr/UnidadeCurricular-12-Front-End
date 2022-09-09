function validaForm(){
    nome = formUser.nome.value;
    email = formUser.email.value;
    telefone = formUser.telefone.value;
    endereco = formUser.endereco.value;
    cpf = formUser.cpf.value;
    cnpj = formUser.cnpj.value;
    alfredo = formUser.alfredo.value;
    alfredoR = formUser.alfredoR.value;

    if (nome == "" || nome.length <= 5){
        alert("Informe o nome completo");
        formUser.nome.focus();
        return false;
    }

    if (email == "" || !email.includes("@") || email.length <= 5){
        alert("e-mail inválido, informe dados corretamente.")
        formUser.email.focus();
        return false;
    }
    if (endereco == "" || endereco.length <= 5){
        alert("Endereço inválido, informe dados corretamente.")
        formUser.email.endereco();
        return false;
    }
//(xx) xxxx-xxxx || (51) X XXXX - XXXX
    if (telefone == "" || telefone.length <= 10){
        alert("Telefone inválido, informe dados corretamente.")
        formUser.telefone.focus();
        return false;
    }
//823.951.290-97
    if (cpf == "" || cpf.length <= 10){
        alert("CPF inválido, informe dados corretamente.")
        formUser.cpf.focus();
        return false;
    }
//53.592.717/0001-36
    if (cnpj == "" || cnpj.length <= 10){
        alert("CNPJ inválido, informe dados corretamente.")
        formUser.cnpj.focus();
        return false;
    }

    if (alfredo == "" || alfredo.length < 8){
        alert("A senha precisa de ao menos 8 caracteres.")
        formUser.alfredo.focus();
        return false;
    }

    if (alfredoR == "" || alfredoR.length < 8 || alfredo !== alfredoR){
        alert("Confirmação de senha inválida, verifique novamente.")
        formUser.alfredoR.focus();
        return false;
    }

}

function confirmaSenha(s){
    alfredo = document.getElementById("alfredo");
    alfredoR = s;
    if (alfredo.value === alfredoR.value){
        alfredo.style.background = "green";
        alfredoR.style.background = "green";
    }else{
        //OrangeRed
        alfredo.style.background = "tomato";
        alfredoR.style.background = "tomato";
    }
}