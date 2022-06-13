function adicionarNoCarrinho() {
    let lista = localStorage.getItem("lista") ?? '[]'
    let carrinho = {};  
    console.log(lista);
    return JSON.parse(lista);
};

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

alteraQuantidade();