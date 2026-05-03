import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const input = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista() {

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

    inputCheckbox.addEventListener("click", function (){
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    containerIntemLista.appendChild(inputCheckbox);
    containerIntemLista.appendChild(nomeItem);
    intemLista.appendChild(containerIntemLista);


    const itemData = document.createElement("p");
    const dataCompleta = gerarDiaDaSemana();
    itemData.innerText = dataCompleta
    itemData.classList.add("texto-data")

    intemLista.appendChild(itemData);

    return intemLista;

}