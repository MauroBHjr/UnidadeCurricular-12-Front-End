function chamaCadPF(){
    alert("Função chama cad pf");
    document.getElementById("CadPF").addEventListener("click", () => {
    document.getElementById("CadForm").hidden = false;
  }, false)
}

function chamaCadPJ(){
    alert("Função chama cad pJ");
}

function myFunction(selecionaDocumento) {
  document.getElementById("docType").value = selecionaDocumento;
  valueteste = document.getElementById("docType").value;
  idteste = document.getElementById("docType").id;
  nameteste = document.getElementById("docType").name;
  alert("Id " + idteste + "\nValue " + valueteste + "\nName " + nameteste);
}



