let bandeirasA = []
let bandeirasB = []

function contrutorDeBandeira(eq, quant, band) {
    eq.forEach((element, index) => {
        if (element == "a") {
            
            bandeirasA.push(band[index]);
        } else if (element == "b") {
            bandeirasB.push(band[index]);
        }
    });
    console.log(bandeirasA, bandeirasB);
}

function comparacao(lista, item) {
    let found = lista.find((element) => element == item);
    if (found == undefined) {
        return true
    } else {
        return false
    }
}