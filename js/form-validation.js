import { formData } from '../js/dados.js';

// VARIAVEIS PUXADAS DO HTML
//VARIAVEL DOS INPUTS E BOTÃOES
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const btn1 = document.getElementById("btn-verify");
const btn2 = document.getElementById("btn-create");

//VARIAVEL DAS MENSAGENS DE ERRO
const erroName = document.getElementById("erro-name")
const erroPhone = document.getElementById("erro-phone")
const erroEmail = document.getElementById("erro-email")


nameInput.addEventListener('input', function() {
    if (formData.nome = nameInput.value) {
        nomeValidado = formData;
        console.log("Objeto de estado atualizado:", formData);
    }    
});


let nomeValidado = "";
let telefoneValidado = "";
let emailValidado = "";









//BOTÃO VERIFICAR
btn1.addEventListener("click", function(){
    event.preventDefault();

    //Criando variaveis validas
    const valorDoNome = nameInput.value.trim();
    const valorDoTelefone = phoneInput.value.trim();
    const valorDoEmail = emailInput.value.trim();
    const formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    //VERIFICANDO ERROS
    //erro do nome
    if (valorDoNome === "") {
        erroName.textContent = "Este campo é obrigatório";
        nomeValidado = "";
    } else {
        erroName.textContent = "";
        nomeValidado = valorDoNome;
    }

        //erro do telefone
    if (phoneInput.value === "") {
        erroPhone.textContent = "Este campo é obrigatório";
    }else if (isNaN(phoneInput.value)){
        erroPhone.textContent = "Digite apenas numeros";
    }else{
        erroPhone.textContent = "";
        telefoneValidado = valorDoTelefone;
    }

        //erro do email
    if (valorDoEmail === "") {
        erroEmail.textContent = "Este campo é obrigatório";
    }else if (!formatoEmailValido.test(valorDoEmail)) {
        erroEmail.textContent = "Por favor, insira um email válido (ex: nome@site.com).";
    }else {
        erroEmail.textContent = "";
        emailValidado = valorDoEmail;
}});


//BOTÃO CRIAR
btn2.addEventListener("click", function(){

    // Verificando campos validados
    if (nomeValidado === "" || telefoneValidado === "" || emailValidado === ""){
        alert("Preencha todos os campos corretamente e clique em 'Verificar' antes de criar o cartão.");
    } else {        
        //Organizar os dados validados em um objeto
        const dadosCartao = {
            empresa: nomeValidado,
            telefone: telefoneValidado,
            email: emailValidado
        };

        //Salvar esse objeto no localStorage
        localStorage.setItem('meuCartao', JSON.stringify(dadosCartao));

        //Redirecionar para a página
        window.location.href = "formAction.html";
    }
});





