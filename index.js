const input = document.getElementById('input-item');

const adicionarItem = document.getElementById('adicionar-item');

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (input.value === "") {
        alert("Por favor insira uma tarefa");
        return;
    }

    const intemLista = document.createElement("li");
    const containerIntemLista = document.createElement("div");
    containerIntemLista.classList.add("lista-item-container");
});