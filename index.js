import {criarItemDaLista} from "./script/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");

const adicionarItem = document.getElementById('adicionar-item');

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia()

});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

verificarListaVazia();