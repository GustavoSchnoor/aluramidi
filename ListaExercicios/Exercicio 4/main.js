// 1) Incrementando o contador no console

/*
const botoes = document.querySelectorAll('.tecla');

let vezesClicado = 0

for (contador = 0; contador < botoes.length; contador++) {
    botoes[contador].addEventListener('click', function() {
        vezesClicado += 1;
        console.log(`O botão foi clicado ${vezesClicado} vezes`);
    });
}
*/

// 2) Criando um array de botões

const todosBotoes = document.querySelectorAll('.tecla');
console.log(todosBotoes);


// 3) Trabalhando com arrays para incrementar um contador APENAS QUANDO O QUARTO ELEMENTO FOR CLICADO (PUFF)

/*
let titulo = document.querySelector('h1');

let contador = 0
todosBotoes[3].addEventListener('click', function() {
    contador += 1;
    titulo.innerHTML = `Voce clicou no botão ${contador} vezes!`;
    console.log(contador);
})
*/

// 4) Utilizando método while para aplicar contador

let contador = 0;
let vezesClicado = 0;

while (contador < todosBotoes.length) {
    todosBotoes[contador].addEventListener('click', function() {
        vezesClicado += 1;
        console.log(`O total de vezes clicado em qualquer botão, foram de ${vezesClicado} vezes`);
    })

    contador++
}