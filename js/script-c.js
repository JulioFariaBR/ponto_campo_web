const sectA = document.querySelector('[data-equipe="a"]');
const sectB = document.querySelector('[data-equipe="b"]');

function contruindoCadaBandeira(lista, eq) {
    posiveisBandeiras.forEach((element, index) => {
        if (comparacao(lista, posiveisBandeiras[index]) == false) {
            eq.innerHTML = `${eq.innerHTML} <div class="sect__div" data-bandeira="on"></div>`
        } else {
            eq.innerHTML = `${eq.innerHTML} <div class="sect__div" data-bandeira="off"></div>`
        }
    });
}