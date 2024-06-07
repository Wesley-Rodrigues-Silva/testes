// Selecionar o formulário para envio
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

// Selecionar os inputs
const pesoInput = document.querySelector('#peso').value;
const alturaInput = document.querySelector('#altura').value.replace(/[.,]/g, '');

const resp = document.querySelector('#resultado');

//Criar a variavel para calcular o IMC
const imc = pesoInput / ((alturaInput / 100) * (alturaInput / 100));

resp.innerHTML = `Seu imc é: ${imc.toFixed(2)}`

})
