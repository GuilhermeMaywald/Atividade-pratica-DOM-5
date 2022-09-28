/*
Desenvolva uma página HTML com um formulário conforme modelo (de baixa fidelidade) abaixo:
a. Após clicar no botão Salvar inclua esse valor em um array, matriz ou objeto, escolha o que achar mais adequado. Atenção! Valide se está preenchido para não salvar valores vazios. 
b. Quando o usuário clicar no botão Concluir você deverá esconder o formulário e exibir o que está salvo em seu objeto JS.
Dicas:
● Usem o que vocês aprenderam até aqui de forma inteligente.
● Deixem esse formulário lindo, usem a criatividade e o CSS para isso.
● Utilizem addEventListener para capturar os eventos. 
*/

let btnPressSave = document.getElementById('btn_save');
let btnPressConclude = document.getElementById('btn_conclude');
let receiveName = document.getElementById('name-client');
let receiveEmail = document.getElementById('email-client');
let receivePhone = document.getElementById('phone-client');
let messageClient = document.getElementById('message');
let listClient = document.getElementById('registered');

let validateFields = (field) => {
    if (field != '') {
        return true;
    }
    return false;
}

let validateMessage = (message) => {
    messageClient.innerHTML = message;
    messageClient.removeAttribute('hidden');
}

function nameReceived(){
    document.getElementById('name-client').innerHTML = 'FUNCIONOU';
}
btnPressSave.addEventListener('click', nameReceived);