function adicionarNoCarrinho() {
    let lista = localStorage.getItem("carrinho");
    let carrinho = {};

    lista = lista == null ? "[]" : lista;
    console.log(lista);
    return JSON.parse(lista);
};

document.addEventListener('load', () => {
    const listagem = adicionarNoCarrinho();
    const ul = document.querySelector("div.produtoSelecionado > ul");

    listagem.forEach(produto => {
        const li = document.createElement('li');
        const article = document.createElement('article');
        const divImagem = document.createElement('div');
        const img = document.createElement('img');
        const divContent = document.createElement('div');
        const h2 = document.createElement('h2');
        const ulComponentes = document.createElement('ul');
        const liComponentes = document.createElement('li');
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
        ulComponentes.classList.add('componentes');
        divClose.classList.add('close');
        divA.classList.add('a');
        btnMenos.classList.add('menos');
        btnMais.classList.add('mais');

        img.src = "/img/produtos/" + produto?.foto;
        btnRedirect.setAttribute('id', 'redirect');
        icon.setAttribute('name', 'trash-outline');
        input.setAttribute('min', '1');
        input.setAttribute('type', 'number');
        input.setAttribute('name', 'total');
        input.setAttribute('id', 'total');
        btnMenos.setAttribute('onclick', 'menos');
        btnMais.setAttribute('onclick', 'mais');
        iconRemove.setAttribute('name', 'remove-outline');
        iconAdd.setAttribute('name', 'add-outline');

        valor.innerText = produto?.valor;
        h2.innerText = produto?.nome;
        liComponentes.innerText = produto?.descricao;

        btnMenos.appendChild(iconRemove);
        btnMais.appendChild(iconAdd);
        divA.appendChild(input);
        divA.appendChild(btnMenos);
        divA.appendChild(btnMais);
        divA.appendChild(valor);
        btnRedirect.appendChild(icon);
        divClose.appendChild(btnRedirect);
        ulComponentes.appendChild(liComponentes);
        divContent.appendChild(h2);
        divContent.appendChild(ulComponentes);
        divImagem.appendChild(img);
        article.appendChild(divImagem);
        article.appendChild(divContent);
        article.appendChild(divClose);
        article.appendChild(divA);
        li.appendChild(article);
        ul.appendChild(li);
    })
})