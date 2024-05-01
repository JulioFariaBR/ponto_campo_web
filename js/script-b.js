let bandeirasA = []
let bandeirasB = []
let bandeirasC = []
let bandeirasD = []
let bandeirasE = []
let bandeirasF = []

function contrutorDeBandeira(eq, quant, band) {
    eq.forEach((element, index) => {
        if (element == "a") {
            if (comparacao(bandeirasA, band[index]) == true) {
                bandeirasA.push(band[index]);   
            }
        } else if (element == "b") {
            if (comparacao(bandeirasB, band[index]) == true) {
                bandeirasB.push(band[index]);   
            }
        }
    });
    console.log(bandeirasA, bandeirasB);
    contrutorDeBandeiraPossiveis()
    contruindoCadaBandeira(bandeirasA, sectA)
    contruindoCadaBandeira(bandeirasB, sectB)
    contruindoCadaBandeira(bandeirasD, sectC)
    contruindoCadaBandeira(bandeirasD, sectD)
    contruindoCadaBandeira(bandeirasE, sectE)
    contruindoCadaBandeira(bandeirasF, sectF)
}

function comparacao(lista, item) {
    let found = lista.find((element) => element == item);
    if (found == undefined) {
        return true
    } else {
        return false
    }
}