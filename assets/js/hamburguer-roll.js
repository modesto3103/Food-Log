var containerHamburguer = document.querySelector('.container-hamburguer');

function definirTopContainerHamburguer(containerHamburguer, valor) {
    if (containerHamburguer && containerHamburguer.style) {
        containerHamburguer.style.top = valor;
    }
}

var altura = window.innerHeight + 61
var scrollHeight = window.innerHeight; 

window.addEventListener('scroll', function() {
    if (window.pageYOffset <= scrollHeight) {
        console.log(window.pageYOffset, scrollHeight);
        containerHamburguer.classList.remove('fixed');
        definirTopContainerHamburguer(containerHamburguer, altura + "px");
    } else {
        containerHamburguer.classList.add('fixed');
        definirTopContainerHamburguer(containerHamburguer, 6.1 + "rem");
    }
});