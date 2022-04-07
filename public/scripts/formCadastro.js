const btnPF = document.querySelector('[data-js="btnPF"]').focus();
const btnPJ = document.querySelector('[data-js="btnPJ"]');
const formPF = document.querySelector('[data-js="form-content-PF"]');
const formPJ = document.querySelector('[data-js="form-content-PJ"]');

btnPF.addEventListener('click', () => {
    console.log('ativo')
    /* if(formPJ.classList.contains('form-content--visible')) {
        formPJ.classList.remove('form-content--visible');
        formPF.classList.add('form-content--visible');
    } else {
        formPF.classList.add('form-content--visible');
    } */
});

btnPJ.addEventListener('click', () => {
    console.log('desativo')
    /* if(formPF.classList.contains('form-content--visible')) {
        formPF.classList.remove('form-content--visible');
        formPJ.classList.add('form-content--visible');
    } else {
        formPJ.classList.add('form-content--visible');
    } */
});



