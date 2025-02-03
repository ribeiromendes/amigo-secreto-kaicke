document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.adicionarAmigo = function () {
        const nome = inputAmigo.value.trim();
        if (nome && !amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            inputAmigo.value = "";
        }
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length > 0) {
            const indice = Math.floor(Math.random() * amigos.length);
            const sorteado = amigos[indice];
            resultado.innerHTML = `<li class="sorteado">Amigo Secreto: ${sorteado}</li>`;
        }
    };
});
