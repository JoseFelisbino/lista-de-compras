const input = document.getElementById('input-item');

const adicionarItem = document.getElementById('adicionar-item');

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    console.log(input.value);
});