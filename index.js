alert("oi");

let pagina = document;
let nome = document.getElementById("nome").value;
let botaoSubmeter = document.getElementById("botão-submeter");


botaoSubmeter.addEventListener("click", submeter);

function submeter()
{
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;

    console.log(idade);
    console.log(cpf);
    console.log(nome);
    
    if (nome == "") {
        alert("nome nulo");
        return;
    }


   
}

function validCPF(cpf) {
    if (cpf=="") {
        return false;
    }

    if (cpf.length !== 11 && cpf.length !== 14) {
        return false;
    }
   
    if (typeof variable === 'string' && /[a-zA-Z]/.test(variable)) {
        return true;
    }    

    //verificar se tem letras
    //verificar se o cps tem caracteres que nao sejam . - ou numeros
    // verificar se o tamanho de caracteres é igual 14 ou 11
    // retorna true se validar o cp
}
console.log(pagina);

