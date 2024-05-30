var nome = document.querySelector('#nome');
var email = document.querySelector('#email');
var senha = document.querySelector('#senha')


cadastrar.addEventListener('click', function(e){
    e.preventDefault();
    alert(`Nome: ${nome} \nE-mail ${email} \nSenha ${senha}`)
    cadastrar();
})
