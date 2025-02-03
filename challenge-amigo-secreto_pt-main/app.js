document.addEventListener("DOMContentLoaded", function() {
    let amigos = [];
    let inputAmigo = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");

    function adicionarAmigo() {
        let nome = inputAmigo.value.trim();
        if (nome !== "" && !amigos.includes(nome)) {
            amigos.push(nome);
            mostrarLista();
            inputAmigo.value = "";
        }
    }

    function mostrarLista() {
        listaAmigos.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            let item = document.createElement("li");
            item.textContent = amigos[i];
            listaAmigos.appendChild(item);
        }
    }

    function sortearAmigo() {
        if (amigos.length > 0) {
            let indiceSorteado = Math.floor(Math.random() * amigos.length);
            resultado.innerHTML = "<li>Amigo Secreto: " + amigos[indiceSorteado] + "</li>";
        }
    }

    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
