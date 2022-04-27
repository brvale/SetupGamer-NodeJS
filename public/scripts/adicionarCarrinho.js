function adicionarNoCarrinho() {
    let lista = localStorage.getItem("carrinho");
    let carrinho = {};
    
    lista = lista == null ? "[]" : lista;
    console.log(lista);
    lista = JSON.parse(lista);
}