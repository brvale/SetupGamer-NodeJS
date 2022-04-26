function adicionarNoCarrinho(item) {
    console.log(item)
  let lista = localStorage.getItem("carrinho");
  let carrinho = {};
  lista = JSON.parse(lista);

  //lista.forEach((item) => (item == "click") === carrinho.push(lista));
}
