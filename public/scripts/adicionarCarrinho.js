const buttonRedirect = document.querySelector('div .close button#redirect');

function adicionarNoCarrinho() {
    let lista = localStorage.getItem("lista") ?? '[]'
    let carrinho = {};  
    console.log(lista);
    return JSON.parse(lista);
};

const carregaTela = () => { //DOMContentLoaded não esperava que a página carregue para ser executado enquanto
    const listagem = adicionarNoCarrinho();           //enquanto com o window o load espera, DOMContentLoaded usado com document e load com window
    const ul = document.querySelector("div.produtoSelecionado form > ul");
    ul.innerHTML = '';
    
    listagem.forEach((produto, index) => {
        
        const valorTotal = document.querySelector("div.concluir h3")
        const li = document.createElement('li'); 
        const article = document.createElement('article');
        const divImagem = document.createElement('div');
        const img = document.createElement('img');
        const divContent = document.createElement('div');
        const h2 = document.createElement('h2');
        const ulComponentes = document.createElement('ul');
        const liComponentes = document.createElement('li');     //Criação de elementos via javascript
        const divClose = document.createElement('div');
        const btnRedirect = document.createElement('button');
        const icon = document.createElement('ion-icon');
        const divA = document.createElement('div');
        const input = document.createElement('input');
        const btnMenos = document.createElement('button');
        const btnMais = document.createElement('button');
        const iconRemove = document.createElement('ion-icon');
        const iconAdd = document.createElement('ion-icon');
        const valor = document.createElement('p')
        
        divImagem.classList.add('img');
        li.classList.add('produto');
        divContent.classList.add('content');
        ulComponentes.classList.add('componentes');             //Adicionando class
        divClose.classList.add('close');
        divA.classList.add('a');
        btnMenos.classList.add('menos');
        btnMais.classList.add('mais');
        
        img.src = "/img/produtos/" + produto?.foto;
        btnRedirect.setAttribute('id', 'redirect');
        btnRedirect.setAttribute('type', 'submit');
        btnRedirect.dataset.id = index;
        //btnRedirect.setAttribute('onclick', 'removerItemLista()');
        icon.setAttribute('name', 'trash-outline');
        input.setAttribute('type', 'number');
        input.setAttribute('min', '1');
        input.setAttribute('value', '1');                       //Atribuição dos atributos
        input.setAttribute('name', 'total');
        input.setAttribute('id', `produto_${produto.id_produto}`);
        btnMenos.setAttribute('onclick', `menos('produto_${produto.id_produto}')`);
        btnMais.setAttribute('onclick', `mais('produto_${produto.id_produto}')`);
        iconRemove.setAttribute('name', 'remove-outline');
        iconAdd.setAttribute('name', 'add-outline');
        
        valor.innerText = "R$" + produto?.valor;
        h2.innerText = produto?.nome;
        liComponentes.innerText = produto?.descricao;
        
        btnMenos.appendChild(iconRemove);
        btnMais.appendChild(iconAdd);
        divA.appendChild(input);
        divA.appendChild(btnMenos);
        divA.appendChild(btnMais);
        divA.appendChild(valor);
        btnRedirect.appendChild(icon);
        divClose.appendChild(btnRedirect);                      //Quem contém quem
        ulComponentes.appendChild(liComponentes);               //Contenção de baixo para cima, inspecione no navegador para se certificar
        divContent.appendChild(h2);
        divContent.appendChild(ulComponentes);
        divImagem.appendChild(img);
        article.appendChild(divImagem);
        article.appendChild(divContent);
        article.appendChild(divClose);
        li.appendChild(article);
        li.appendChild(divA);
        ul.appendChild(li);

        btnRedirect.addEventListener('click', () => {
            const lista = JSON.parse(localStorage.getItem('lista'));

            lista.forEach(prod => {

                if(produto.id_produto == prod.id_produto ){ 
                    lista.splice(index, 1)
                    
                    localStorage.setItem('lista', JSON.stringify(lista))
                    carregaTela()
                    return
                }

            })
        })

        function calculaTotal() {
            var total = 0;

            total += produto?.valor

            valorTotal.innerText = "Total: R$" + total;
        }

        calculaTotal();
    })
    
}


document.addEventListener('DOMContentLoaded', carregaTela)

/*btnRedirect.addEventListener('click', (event) => {
    const produto = localStorage.getItem('lista');
    const btnRedirect = document.querySelector('button#redirect')

    if(btnRedirect == event.click){
        produto.forEach(produto => {
            localStorage.removeItem(produto.produto_id)
        })
    }

})*/

/*buttonRedirect.addEventListener('click', (event) => {
    const produto = localStorage.getItem('lista');

    event.produto.slice(produto.produto_id, produto.produto_id)
})*/

function resetarStorage(){
    if(localStorage != null){
        localStorage.removeItem('lista')
    }
}