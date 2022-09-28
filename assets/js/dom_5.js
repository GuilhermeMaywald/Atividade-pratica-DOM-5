/*
Desenvolva uma página HTML com um formulário conforme modelo (de baixa fidelidade) abaixo:
a. Após clicar no botão Salvar inclua esse valor em um array, matriz ou objeto, escolha o que achar mais adequado. 
Atenção! Valide se está preenchido para não salvar valores vazios. 
b. Quando o usuário clicar no botão Concluir você deverá esconder o formulário e exibir o que está salvo em seu objeto JS.
Dicas:
● Usem o que vocês aprenderam até aqui de forma inteligente.
● Deixem esse formulário lindo, usem a criatividade e o CSS para isso.
● Utilizem addEventListener para capturar os eventos. 
*/

let receiveName = document.getElementById('name-client');
let receiveEmail = document.getElementById('email-client');
let receivePhone = document.getElementById('phone-client');
let messageClient = document.getElementById('message');
let listClient = document.getElementById('registered');
let btnPressSave = document.getElementById('btn-save');
let btnPressConclude = document.getElementById('btn-conclude');
let arrFields = [];

let validateFields = (field) => {
    if (field != '') {
        return true;
    }
    return false;
}

let cleanFormulary = () => {
    receiveName.value = '';
    receiveEmail.value = '';
    receivePhone.value = '';
}

let validateMessage = (message) => {
    messageClient.innerHTML = message;
    messageClient.removeAttribute('hidden');
}

function receivedFields(){
    let valueName = receiveName.value;  
    let valueEmail = receiveEmail.value;
    let valuePhone = receivePhone.value;
    let fields = {
        name: valueName,
        email: valueEmail,
        telephone: valuePhone
    }
    validateFields();
    arrFields.push(fields);
    cleanFormulary();
    console.log(arrFields);
}

function displayList(element, key) {
    console.log(key, element.name);
    console.log(key, element.email);
    console.log(key, element.telephone);
}

function completeRegistration() {
    let registrationCompleted = document.getElementsByClassName('formulary');
    let listCompleted = document.getElementsByClassName('message-registration');

    registrationCompleted.setAttribute('class', 'inactive');
    listCompleted.setAttribute('class', 'active');
    arrFields.forEach(displayList);
}

btnPressSave.addEventListener("click", receivedFields);
btnPressConclude.addEventListener("click", completeRegistration);