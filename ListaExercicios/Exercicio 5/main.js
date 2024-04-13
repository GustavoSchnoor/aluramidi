// 1) Adicionando classe com clique
// 2) Removendo classe com clique
/*
const botoes = document.querySelectorAll('.tecla');

for (let contador = 0; contador < botoes.length; contador++) {
    let botao = botoes[contador];
    botao.addEventListener('click', function() {
        // com o classList.toggle('ativa') ele vai adicionar caso não tenha, e remover caso tenha. ELIMINANDO a necessidade de fazer mais código manual de checagem.
        botao.classList.toggle('ativa'); 
    })
}
*/

const botoes = document.querySelectorAll('.tecla');

botoes.forEach(function(botao) {
    botao.addEventListener('click', function () {
        botao.classList.toggle('ativa');
    })
})
