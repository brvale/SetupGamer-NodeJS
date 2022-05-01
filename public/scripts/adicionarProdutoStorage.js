function adicionarNoCarrinho(evento) {
  console.log(evento);
  const target = evento.dataset;
  const data = JSON.parse(target.id);
  console.log(data);

  let lista = localStorage.getItem("lista");
  //carrosellet carrinho = {};
  
  lista = lista == null ? "[]" : lista;
  console.log(lista);
  lista = JSON.parse(lista);
  lista.push(data);
  localStorage.setItem("lista", JSON.stringify(lista));

  console.log(lista);
}
