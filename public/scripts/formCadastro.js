const btnPF = document.getElementById('btnPF');
const btnPJ = document.getElementById('btnPJ');
const formPF = document.getElementById('form-content--PF');
const formPJ = document.getElementById('form-content--PJ');

btnPF.addEventListener('click', () => {
    if(formPJ.classList.contains('form-content--visible')) {
        formPJ.classList.remove('form-content--visible');
        formPF.classList.add('form-content--visible');
    } else {
        formPF.classList.add('form-content--visible');
    }
});

btnPJ.addEventListener('click', () => {
    if(formPF.classList.contains('form-content--visible')) {
        formPF.classList.remove('form-content--visible');
        formPJ.classList.add('form-content--visible');
    } else {
        formPJ.classList.add('form-content--visible');
    }
});



