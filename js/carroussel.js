let indiceAtual = 0;
let tempoMudarImagem = 5000;
let intervalo = setInterval(moverAutomatico, tempoMudarImagem); 


mostrarImagens(indiceAtual);

function moverAutomatico() {
    mostrarImagens(indiceAtual += 1);
}


function mover(n) {
    mostrarImagens(indiceAtual += n);
}

function mostrarImagens(n) {
    let i;
    let imagens = document.getElementsByClassName("carroussel")[0].getElementsByClassName("row");
    if (n >= imagens.length) {indiceAtual = 0}    
    if (n < 0) {indiceAtual = imagens.length - 1}
    for (i = 0; i < imagens.length; i++) {
        imagens[i].style.display = "none";  
    }
    imagens[indiceAtual].style.display = "flex";  
}

let carrossel = document.querySelector('.carroussel');
carrossel.addEventListener('mouseover', () => {
    clearInterval(intervalo);
});

carrossel.addEventListener('mouseout', () => {
    intervalo = setInterval(moverAutomatico, tempoMudarImagem);
});