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