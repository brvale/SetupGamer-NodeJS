

function total(){
  let input = document.getElementById('total');

  if(input.value == ''){
    input.replace('', 1);
  }
}

function mais(id){
  
  var atual = document.getElementById(id);
  var novo = +atual.value - (-1); //Evitando Concatenacoes
    const [,id_produto] = id.split("_")
    qtdNoCarrinho(id_produto, novo)
    atual.value = novo;

  }
  
  function menos(id){
    var atual = document.getElementById(id);
    if(atual.value > 0) { //evita números negativos
      var novo = atual.value - 1;

      if(novo <= 0){
        novo = 1;
      }

      const [,id_produto] = id.split("_")
      qtdNoCarrinho(id_produto, novo)

      atual.value = novo;
    }
  }

