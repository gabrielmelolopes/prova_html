const lista = document.getElementById('minhaLista');
const botao = document.getElementById('addBtn');
const botaoremove = document.getElementById('rmvBtn');
const concluirBTN = document.getElementById('concluirBTN');
const input = document.getElementById('input');
botao.addEventListener("click", () => {
    const novoItem = document.createElement('li');
    novoItem.textContent = input.value;

    lista.appendChild(novoItem);
});

botaoremove.addEventListener("click", () => {

    const RemoverItemLista = lista.children[0];
    lista.removeChild(RemoverItemLista);
});

concluirBTN.addEventListener('click', function () {
    const itens = document.querySelectorAll('#minhaLista li');
    itens.forEach(function (li) {
        li.style.color = 'green';
    });
});



