// Criamos uma função que tem um parametro (idElementoAudio) e assim, será dado play no audio, atraves do id recebido.
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

// Criamos uma constante listaDeTeclas que recebe TODAS teclas (button) com a classe ".tecla"
const listaDeTeclas = document.querySelectorAll('.tecla');



// PARA contador que recebe/começa com 0 ; ENQUANTO o contador for MENOR que o tamanho da lista de teclas (9) será feito os procedimentos dentro do BLOCO {} e por fim, incrementado +1
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    // Criamos uma constate elemento, que vai receber o o nome da classe[1] que é uma "STRING",  através da const listaDeTeclas[contador] , e como é um loop vai ser do 0 até o 9
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    // console.log(idAudio);

    // Ao clicar no botão correspondente ao indice [0-9] vamos receber o que a função ANONIMA nos trás, que é a chamativa da função tocaSom(idAudio) 
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    // console.log(contador);

    tecla.onkeydown = function(evento) {
        console.log(evento);
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }



}









// METODO QUE APRENDI SOZINHO E VOU DEIXAR COMENTADO (Funcionou perfeitamente <3)
/*

let listaDeTeclas = document.querySelectorAll('.tecla');
let listaDeAudios = document.querySelectorAll('audio');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    listaDeTeclas[contador].addEventListener('click', function() {
        listaDeAudios[contador].play();
    });
}

*/