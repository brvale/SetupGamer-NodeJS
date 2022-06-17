function adicionarNoCarrinho() {
    let lista = localStorage.getItem("lista") ?? '[]'

    return JSON.parse(lista);
};

function qtdNoCarrinho(id, qtd) {
    const array = adicionarNoCarrinho()
    console.log(id)

    const index = array.findIndex(obj => obj.id_produto == id);
    array[index].quantidade = qtd;
    localStorage.setItem('lista', JSON.stringify(array));
    carregaTela()
}

function quantidadeProdutos(){
    return adicionarNoCarrinho().length;
}

function alteraQuantidade(){
    const spanQuantidade = document.getElementById('icone-carrinho');
    const link = document.querySelector('.icone-botao');

    const quantidade = quantidadeProdutos();

    spanQuantidade.innerText = quantidade;
    spanQuantidade.style.position = "relative";
    spanQuantidade.style.right = "10px";
    spanQuantidade.style.bottom = "0px";
    spanQuantidade.style.color = "#20232d";
    spanQuantidade.style.width = "50px";
    spanQuantidade.style.height = "50px";
    spanQuantidade.style.backgroundColor = "white";

    link.style.textDecoration = "none";
}

function enviaCarrinho(e){
    e.preventDefault();
    const listaDeProdutos = adicionarNoCarrinho();

    fetch("/checkout/carrinhoDeCompra", {
        method: "POST",
        body: JSON.stringify(listaDeProdutos),
        headers: {
            "Content-Type": "application/json"
          }
    }).then(response => {
        localStorage.removeItem('lista');
        location.href = `${location.protocol}//${location.host}/checkout/endereco`
    }).catch(err => alert("compra não realizada" + err.message))
}

alteraQuantidade();