// Criamos uma função que tem um parametro (idElementoAudio) e assim, será dado play no audio, atraves do id recebido.
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Criamos uma constante listaDeTeclas que recebe TODAS teclas (button) com a classe ".tecla"
const listaDeTeclas = document.querySelectorAll('.tecla');



// ENQUANTO o contador for MENOR que o tamanho da lista de teclas (9) será feito os procedimentos dentro do BLOCO {}
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    // Criamos uma constate elemento, que vai receber o o nome da classe[1] que é uma "STRING",  através da const listaDeTeclas[contador] , e como é um loop vai ser do 0 até o 9
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    // Ao clicar no botão correspondente ao indice [0-9] vamos receber o que a função ANONIMA nos trás, que é a chamativa da função tocaSom(idAudio) 
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    console.log(contador);
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