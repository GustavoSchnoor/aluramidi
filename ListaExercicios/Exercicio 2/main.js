// ARQUIVOS DE AUDIO MP3 DA TAG AUDIO
const somPom = document.querySelector('#som_tecla_pom');
const somClap = document.querySelector('#som_tecla_clap');

// BOTOES CLICAVEIS PARA SAIR O SOM
const teclaPom = document.querySelector('.tecla_pom');
const teclaClap = document.querySelector('.tecla_clap');

// CRIANDO AS FUNÇÕES
function tocaSomPom() {
    somPom.play();
}

function tocaSomClap() {
    somClap.play();
}

// ADICIONANDO EVENTOS PARA QUE SAIA O SOM DESEJADO, AO CLICAR NO BOTAO RESPECTIVO
teclaPom.addEventListener('click', tocaSomPom);
teclaClap.addEventListener('click', tocaSomClap);


// TAMBEM PODE FAZER DIRETO O EVENTO DE OUVINTES, SEM CRIAR FUNÇÕES SEPARADAMENTE E CHAMA-LAS. FAZENDO ASSIM, DIRETO NA LINHA DE COMANDOS DO EVENTO. SEGUE EXEMPLO ABAIXO:
/*

teclaPom.addEventListener('click', function() {
    somPom.play();
});

teclaClap.addEventListener('click', function() {
    somClap.play();
})

*/