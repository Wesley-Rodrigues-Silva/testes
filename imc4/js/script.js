document.querySelector('form').addEventListener('submit', function(e) {

    e.preventDefault();

const pesoInput = document.querySelector('#peso').value;
const alturaInput = document.querySelector('#altura').value.replace(/[. ,]/g, '');
const result = document.querySelector('#resp');

const imc = pesoInput / ((alturaInput / 100) * (alturaInput / 100));

result.textContent = `Seu IMC é ${imc.toFixed(2)}`

})
