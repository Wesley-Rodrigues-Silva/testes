document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();

    const alutaInput = document.querySelector('#altura').value.replace(/[. ,]/g, '');
    const pesoInput = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resp');

    const imc = pesoInput / ((alutaInput / 100) * (alutaInput / 100))

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`

})

