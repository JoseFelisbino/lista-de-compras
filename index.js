const input = document.getElementById('input-item');
const listaDeCompras = document.getElementById("lista-de-compras");

const adicionarItem = document.getElementById('adicionar-item');
let contador = 0;

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (input.value === "") {
        alert("Por favor insira uma tarefa");
        return;
    }

    const intemLista = document.createElement("li");
    const containerIntemLista = document.createElement("div");
    containerIntemLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = input.value;

    containerIntemLista.appendChild(inputCheckbox);
    containerIntemLista.appendChild(nomeItem);

    intemLista.appendChild(containerIntemLista);
    listaDeCompras.appendChild(intemLista)


});