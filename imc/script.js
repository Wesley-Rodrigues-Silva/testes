// Adiciona um evento de escuta ao formulário com o id 'containerForm' quando ocorre o evento de envio
document.querySelector('#containerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    // Obtém o valor do input com o id 'peso'
    const peso = document.querySelector('#peso').value;
    // Obtém o valor do input com o id 'altura' e substitui vírgulas e pontos por uma string vazia
    const altura = document.querySelector('#altura').value.replace(/[.,]/g, '');

    // Calcula o índice de massa corporal (IMC)
    const imc = peso / ((altura / 100) * (altura / 100));

    // Remove a classe 'selected' de todos os elementos <span> dentro de <li> dentro de <ul>
    const colorTab = document.querySelectorAll('ul li span')
    colorTab.forEach(item =>{
        item.classList.remove('selected');
    });

    // Define o conteúdo do elemento com o id 'resultado' como o valor do IMC formatado
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    // Adiciona a classe 'selected' a elementos com classe específica com base no valor do IMC
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
    } else if (imc < 35){
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
    );
});
