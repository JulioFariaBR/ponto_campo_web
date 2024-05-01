let posiveisBandeiras = []

function contrutorDeBandeiraPossiveis(numeroDeBandeiras) {
    while (inputNumero.value > 0) {
        posiveisBandeiras.unshift(inputNumero.value)
        inputNumero.value = (--inputNumero.value)
    }
    console.log(posiveisBandeiras);
}