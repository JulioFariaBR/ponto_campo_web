

function enviarDadosCad(dados) {
    console.log(JSON.stringify(dados));
    fetch('https://api.sheetmonkey.io/form/8316xXxakHEu8WP6pHgKKK', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}