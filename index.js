import {criarItemDaLista} from "./script/criarItemDaLista.js";
import verificarListaVazia from "./script/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const adicionarItem = document.getElementById('adicionar-item');

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras)

});

verificarListaVazia(listaDeCompras);