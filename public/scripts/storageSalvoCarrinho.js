
document.addEventListener('onload', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('carrinho')) 
    
    document.querySelector('ul').innerHTML(`<ul>${arrayStorage}</ul>`)
})

//ja possuimos dados salvo na localStorage então precisamos tratalo para exibir ele no front
//com innerHTML fazer com que seja possivel exibir as informações do carrinho