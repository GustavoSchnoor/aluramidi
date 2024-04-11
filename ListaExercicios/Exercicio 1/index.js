let botaoPom = document.querySelector('.tecla_pom');

botaoPom.addEventListener('click', function() {
    alert('Botão Pom foi clicado!');
})

const music1 = document.querySelector('.controlePom');
const play = document.querySelector('.botao_play');
const pause = document.querySelector('.botao_pause');
const reset = document.querySelector('.botao_reset');
const controleVolume = document.querySelector('#volume');

play.addEventListener('click', function() {
    music1.play();
})

pause.addEventListener('click', function() {
    music1.pause();
})

reset.addEventListener('click', function() {
    music1.currentTime = 0;
})

controleVolume.addEventListener('input', function() {
    music1.volume = controleVolume.value;
})
