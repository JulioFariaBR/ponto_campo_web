const params = new URLSearchParams(document.location.search);
const body = document.querySelector('body');
let equipe
let quant
let band

const loading = `<div class="loader"></div><h1>Não Saia da Página...</h1>`
const complete = `<div class="ok"></div><h1>Concluído</h1><h1>Pode sair da Página...</h1>`

function onInfos() {
    body.innerHTML = loading
}