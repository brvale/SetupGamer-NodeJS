function adicionarNoCarrinho(evento) {
  console.log(evento);
  const target = evento.dataset;
  const dataId = target.id;
  console.log(dataId);
  let lista = localStorage.getItem("carrinho");
  let carrinho = {};
  lista = JSON.parse(lista);

  console.log(lista);

  lista.forEach((item) => {
   if(item == "click") carrinho.push(lista);
  })
}
