let equipeBusca = [];
let quantBusca = [];
let bandeiraBusca = [];
let realizarPesquisa = true;
const inputNumero = document.querySelector('#numero__input');

function extraindodados(dados) {
    dados.forEach((elemento, index) => {
            equipeBusca.push(elemento.c[0].v)
            quantBusca.push(elemento.c[1].v)
            bandeiraBusca.push(elemento.c[2].v)
    })
    inputNumero.value = quantBusca[0]
    console.log(equipeBusca)
    console.log(quantBusca);
    console.log(bandeiraBusca);
    contrutorDeBandeira(equipeBusca, quantBusca, bandeiraBusca)
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1Yk4UDDB2COLOjSBxRYHqwvSBu_b0tyBbOaYD4EqtLG0/gviz/tq?tqx=out:json`

    let data = await fetch(url)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)))
    extraindodados(data.table.rows);
}

function atualizarDados() {
    while (equipeBusca.length) {
        equipeBusca.pop()
    }
    while (quantBusca.length) {
        quantBusca.pop()
    }
    while (bandeiraBusca.length) {
        bandeiraBusca.pop()
    }
    console.log(equipeBusca)
    console.log(quantBusca);
    console.log(bandeiraBusca);
    busca();
}
