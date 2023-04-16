var iconHamburguer = document.querySelector('.icon-hamburguer');
var menuHamburguer = document.querySelector('.menu-hamburguer');

function definirTopIconHamburguer(iconHamburguer, valor) {
    if (iconHamburguer && iconHamburguer.style) {
        iconHamburguer.style.top = valor;
    }
}
function definirTopMenuHamburguer(menuHamburguer, valor) {
    if (menuHamburguer && menuHamburguer.style) {
        menuHamburguer.style.top = valor;
    }
}

var altura = window.innerHeight + 20
var scrollHeight = window.innerHeight; 

window.addEventListener('scroll', function() {
    if (window.pageYOffset <= scrollHeight) {
        iconHamburguer.classList.remove('fixed');
        definirTopIconHamburguer(iconHamburguer, altura + "px");
    } else {
        iconHamburguer.classList.add('fixed');
        definirTopIconHamburguer(iconHamburguer, 2 + "rem");
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset <= scrollHeight) {
        menuHamburguer.classList.remove('fixed');
        definirTopMenuHamburguer(menuHamburguer, 0 + "px");
    } else {
        menuHamburguer.classList.add('fixed');
        definirTopMenuHamburguer(menuHamburguer, 0);
    }
});





function obterPosicaoElemento(elemento) {
    var posicao = 0;
    while (elemento) {
        posicao = (elemento.offsetTop - window.pageYOffset);
        elemento = elemento.offsetParent;
    }
    return posicao;
}

var meuElemento = document.getElementById("section-comidas");
var posicao = obterPosicaoElemento(meuElemento);
console.log("Posição topo: " + posicao + "px");

console.log(meuElemento.offsetTop)