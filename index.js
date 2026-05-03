import {criarItemDaLista} from "./script/criarItemDaLista";

const listaDeCompras = document.getElementById("lista-de-compras");

const adicionarItem = document.getElementById('adicionar-item');
let contador = 0;

adicionarItem.addEventListener("click", (evento) => {
    
    listaDeCompras.appendChild(intemLista);
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