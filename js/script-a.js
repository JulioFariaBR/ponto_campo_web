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
    if (quantBusca[0] > 0) {
        console.log(equipeBusca)
        console.log(quantBusca);
        console.log(bandeiraBusca);
        contrutorDeEquipes(equipeBusca, quantBusca, bandeiraBusca);
        contrutorDeBandeira(equipeBusca, quantBusca, bandeiraBusca)
    } else {
        contruirBandeirasFalsas(sectA)
        contruirBandeirasFalsas(sectB)
    }
}
async function busca() {
    let url = `https://docs.google.com/spreadsheets/d/1DrtsyRvYewDXR8uOTcPD112E6d93p7pBwOGPV5PGJDU/gviz/tq?tqx=out:json`

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
    setTimeout(() => {
        console.log("Atualizando...");
        location.reload()
        }, "15000");        
}

function contruirBandeirasFalsas(eq) {
    eq.innerHTML = `Nenhum dados encontrados...`
}

function contrutorDeEquipes() {
    if (condition) {
        
    } else if (condition) {
        
    } else if (condition) {
        
    } else if (condition) {
        
    } else if (condition) {
        
    }
}

atualizarDados();