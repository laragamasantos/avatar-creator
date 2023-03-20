let campoNomeEl = document.querySelector('#nome');
let exibeNomeEl = document.querySelector('#avatar-nome');
let campoCorEl = document.querySelector('#cor');
let corpoEl = document.querySelector('#avatar-corpo');
let cabecaEl = document.querySelector('#avatar-cabeca');
let campoCabeloEl = document.querySelector('#cabelos');
let cabeloEl = document.querySelector('#avatar-cabelo');
let 

function alteraNome(){
    exibeNomeEl.innerHTML = campoNomeEl.value;
}

function alteraPele(){
    corpoEl.style.backgroundColor = campoCorEl.value;
    cabecaEl.style.backgroundColor = campoCorEl.value;
}

function alteraCabelo(){
    cabeloEl.src = campoCabeloEl.value;
}

campoNomeEl.addEventListener('change', alteraNome);
campoCorEl.addEventListener('change', alteraPele);
campoCabeloEl.addEventListener('change', alteraCabelo);
