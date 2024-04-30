let nomeBusca = [];
let userBusca = [];
let serieBusca = [];
let anoBusca = [];
function extraindodados(dados) {
    dados.forEach((elemento, index) => {
        if (index == 0) {
            
        } else {
            nomeBusca.push(elemento.c[1].v)
            userBusca.push(elemento.c[0].v)
            serieBusca.push(elemento.c[2].v)
            anoBusca.push(elemento.c[3].v)
        }
    })
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1S0QjkPaL6Xfa9sLCHVrzpfB2YZZelzqB1D4Qa1WREDg/gviz/tq?tqx=out:json`

    let data = await fetch(url)
        .then(res => res.text())
        .then(text => JSON.parse(text.substr(47).slice(0, -2)))
    extraindodados(data.table.rows);
}