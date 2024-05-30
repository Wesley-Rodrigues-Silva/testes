document.querySelector('#containerForm').addEventListener('submit', function (e) {
    e.preventDefault()

    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value.replace(/[.,]/g, '');

    const imc = peso / ((altura / 100) * (altura / 100));

    const colorTab = document.querySelectorAll('ul li span')
    colorTab.forEach(item =>{
        item.classList.remove('selected');
    });

    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`

    if (imc < 18.5) {
        document.querySelectorAll('.abaixoDoPeso').forEach(cell => {
            cell.classList.add('selected')
        })
    } else if (imc < 25){
        document.querySelectorAll('.pesoNormal').forEach(cell => {
            cell.classList.add('selected')
        })
    } else if (imc < 30){
        document.querySelectorAll('.sobrepeso').forEach(cell => {
            cell.classList.add('selected')
        })
    }
    else if (imc < 35){
        document.querySelectorAll('.obesidadeGrauI').forEach(cell => {
            cell.classList.add('selected')
        })
    } else if (imc < 40){
        document.querySelectorAll('.obesidadeGrauII').forEach(cell => {
            cell.classList.add('selected')
        })
    } else (
        document.querySelectorAll('.obesidadeGrauIII').forEach(cell => {
            cell.classList.add('selected')
        })
    )
    
});

