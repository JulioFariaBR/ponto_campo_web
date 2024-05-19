let equipeBusca = [];
let quantBusca = [];
let bandeiraBusca = [];
let realizarPesquisa = true;
const inputNumero = document.querySelector('#numero__input');

function extraindodados(dados) {
    dados.forEach((elemento, _index) => {
            equipeBusca.push(elemento.c[0].v)
            quantBusca.push(elemento.c[1].v)
            bandeiraBusca.push(elemento.c[2].v)
    })
    inputNumero.value = quantBusca[0]
    if (quantBusca[0] > 0) {
        console.log(equipeBusca)
        console.log(quantBusca);
        console.log(bandeiraBusca);
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

function contrutorDeEquipes(_equipeA, _equipeB, _equipeC, _equipeD, _equipeE,) {
    if (_equipeA.find((element) => element == 0) == 0) {
        document.querySelector('[data-equipe="a"]').style.display = 'block';
        document.querySelector('[data-equipetexto="a"]').style.display = 'block';
    } else if (_equipeB.find((element) => element == 0) == 0) {
        
    } else if (_equipeB.find((element) => element == 0) == 0) {
        
    } else if (_equipeC.find((element) => element == 0) == 0) {
        
    } else if (_equipeD.find((element) => element == 0) == 0) {
        
    }
}

atualizarDados();