let equipeBusca = []
let quantBusca = []
let bandeiraBusca = []
let realizarPesquisa = false

function extraindodados(dados) {
    dados.forEach((elemento, index) => {
        if (index == 0) {
            
        } else {
            equipeBusca.push(elemento.c[0].v)
            quantBusca.push(elemento.c[1].v)
            bandeiraBusca.push(elemento.c[2].v)
        }
    })
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1Yk4UDDB2COLOjSBxRYHqwvSBu_b0tyBbOaYD4EqtLG0/gviz/tq?tqx=out:json`

    let data = await fetch(url)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)))
    extraindodados(data.table.rows);
}

async function letsQuizz() {
    if (realizarPesquisa == false) {
        console.log("Pesquisa está desativada");   
    } else {
        while (realizarPesquisa == true) {
            setTimeout(() => {
                console.clear();
                busca()
            }, 60000);
        }
    }
}