const params = new URLSearchParams(document.location.search);
const body = document.querySelector('body');
let equipe
let quant
let band

const loading = `<div class="loader"></div><h1>Clique no círculo</h1><h1>Não Saia da Página...</h1>`
const complete = `<div class="ok"></div><h1>Concluído</h1><h1>Pode sair da Página...</h1>`

function enviarDadosCad(dados) {
    console.log(JSON.stringify(dados));
    fetch('https://api.sheetmonkey.io/form/8316xXxakHEu8WP6pHgKKK', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}

function onInfos() {
    body.innerHTML = loading;

    equipe = params.get("eq");
    quant = parseInt(params.get("quant"));
    band = parseInt(params.get("band"));

    objetoCad = {
        equipe: equipe,
        quant: quant,
        bandeira: band,
    }
    console.log(objetoCad);
    enviarDadosCad(objetoCad);

    body.innerHTML = complete;
}