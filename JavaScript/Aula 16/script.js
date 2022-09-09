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

    if (email == "" || )
}