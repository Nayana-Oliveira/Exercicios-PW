function aoClicar() {
    alert("Você clicou no botão!");
}

const botao = document.querySelector("#meuButton");
botao.addEventListener("click", aoClicar);

//remover listener
botao.removeEventListener("click", aoClicar);