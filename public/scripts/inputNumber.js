function mais(){
    var atual = document.getElementById("total").value;
    var novo = atual - (-1); //Evitando Concatenacoes
    document.getElementById("total").value = novo;
  }
  
  function menos(){
    var atual = document.getElementById("total").value;
    if(atual > 0) { //evita números negativos
      var novo = atual - 1;
      document.getElementById("total").value = novo;
    }
  }