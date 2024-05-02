

function enviarDadosCad(dados) {
    console.log(JSON.stringify(dados));
    fetch('https://api.sheetmonkey.io/form/xogUMhbowm4q75RAG549QR', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    })
}