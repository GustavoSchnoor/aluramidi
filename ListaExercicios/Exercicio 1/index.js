let botaoPom = document.querySelector('.tecla_pom');

botaoPom.addEventListener('click', function() {
    alert('Botão Pom foi clicado!');
})

let music1 = document.querySelector('.controlePom');
let play = document.querySelector('.botao_play');
let pause = document.querySelector('.botao_pause');

play.addEventListener('click', function() {
    music1.play();
})

pause.addEventListener('click', function() {
    music1.pause();
})