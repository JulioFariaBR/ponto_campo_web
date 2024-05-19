let bandeirasA = []
let bandeirasB = []
let bandeirasC = []
let bandeirasD = []
let bandeirasE = []

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
        } else if (element == "c") {
            if (comparacao(bandeirasC, band[index]) == true) {
                bandeirasC.push(band[index]);   
            }
        } else if (element == "d") {
            if (comparacao(bandeirasD, band[index]) == true) {
                bandeirasD.push(band[index]);   
            }
        } else if (element == "e") {
            if (comparacao(bandeirasE, band[index]) == true) {
                bandeirasE.push(band[index]);   
            }
        }
    });
    console.log(bandeirasA, bandeirasB);
    contrutorDeEquipes(bandeirasA, bandeirasB, bandeirasC, bandeirasD, bandeirasE);
    contrutorDeBandeiraPossiveis()
    contruindoCadaBandeira(bandeirasA, sectA)
    contruindoCadaBandeira(bandeirasB, sectB)
    contruindoCadaBandeira(bandeirasC, sectC)
    contruindoCadaBandeira(bandeirasD, sectD)
    contruindoCadaBandeira(bandeirasE, sectE)
}

function comparacao(lista, item) {
    let found = lista.find((element) => element == item);
    if (found == undefined) {
        return true
    } else {
        return false
    }
}