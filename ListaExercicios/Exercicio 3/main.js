// Selecionando todos os botões
const listaBotoes = document.querySelectorAll('.tecla');
const listaAudios = document.querySelectorAll('audio');

listaBotoes[0].addEventListener('click', function() {
    listaAudios[0].play()
})

listaBotoes[1].addEventListener('click', function() {
    listaAudios[1].play();
})