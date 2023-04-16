var containerHamburguer = document.querySelector('.container-hamburguer');
// var menuHamburguer = document.querySelector('.menu-hamburguer');

function definirTopContainerHamburguer(containerHamburguer, valor) {
    if (containerHamburguer && containerHamburguer.style) {
        containerHamburguer.style.top = valor;
    }
}
// function definirTopMenuHamburguer(menuHamburguer, valor) {
//     if (menuHamburguer && menuHamburguer.style) {
//         menuHamburguer.style.top = valor;
//     }
// }

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

// window.addEventListener('scroll', function() {
//     if (window.pageYOffset <= scrollHeight) {
//         menuHamburguer.classList.remove('fixed');
//         definirTopMenuHamburguer(menuHamburguer, 0 + "px");
//     } else {
//         menuHamburguer.classList.add('fixed');
//         definirTopMenuHamburguer(menuHamburguer, 0);
//     }
// });





// function obterPosicaoElemento(elemento) {
//     var posicao = 0;
//     while (elemento) {
//         posicao = (elemento.offsetTop - window.pageYOffset);
//         elemento = elemento.offsetParent;
//     }
//     return posicao;
// }

// var meuElemento = document.getElementById("section-comidas");
// var posicao = obterPosicaoElemento(meuElemento);
// console.log("Posição topo: " + posicao + "px");

// console.log(meuElemento.offsetTop)