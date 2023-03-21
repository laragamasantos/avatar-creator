let campoNomeEl = document.querySelector('#nome');
let exibeNomeEl = document.querySelector('#avatar-nome');
let campoCorEl = document.querySelector('#cor');
let corpoEl = document.querySelector('#avatar-corpo');
let cabecaEl = document.querySelector('#avatar-cabeca');
let campoCabeloEl = document.querySelector('#cabelos');
let cabeloEl = document.querySelector('#avatar-cabelo');
let campoBandanaEl = document.querySelector('#bandana');
let campoLacinhosEl = document.querySelector('#lacinhos');
let campoOculosEl = document.querySelector('#oculos');
let bandanaEl = document.querySelector('#avatar-bandana');
let lacinhosEl = document.querySelector('#avatar-lacinhos');
let oculosEl = document.querySelector('#avatar-oculos');
let botaoBaixarEl = document.querySelector('#baixar');

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

function alteraAcessorios(e){
    let atual = e.currentTarget;
    if(atual === campoBandanaEl)
        bandanaEl.classList.toggle('visivel');
    else if(atual === campoLacinhosEl)
        lacinhosEl.classList.toggle('visivel');
    else
        oculosEl.classList.toggle('visivel');
}

// no clique de um botão "Baixar imagem"...
// 'avatarEl' deve conter o elemento #avatar-preview
function html2canvas(avatarEl, { useCORS: true }).then(function (canvas) {
    // a  foi gerada nesse objeto "canvas" e vamos pedir a ele
    // uma URL que a representa, codificada em uma String no modelo base64¹
    //
    // ¹base64: é uma forma de representar os pixels da imagem (ou qualquer
    // informação, na verdade) usando uma string com 64 tipos de caracteres
    // (todas as letras, maiúsculas e minúsculas, os algarismos de 0 a 9
    // e os símbolos '/' e '+'). Para mais informações, veja a página
    // da Wikipedia sobre base64 (https://pt.wikipedia.org/wiki/Base64)
    let imagemCodificadaEmURL = canvas.toDataURL();

    // cria um <a href="xxx" download="avatar.png"></a> dinamicamente
    // e o configura para que ele aponte (href) para uma URL que codifica
    // a imagem gerada pela biblioteca html2canvas
    let linkEl = document.createElement('a');
    linkEl.download = 'avatar.png';
    linkEl.href = imagemCodificadaEmURL;

    // coloca esse link no body da página
    document.body.appendChild(linkEl);

    // simula um clique no link
    linkEl.click();
  }
);
// fim da callback de clique do botão

campoNomeEl.addEventListener('change', alteraNome);
campoCorEl.addEventListener('change', alteraPele);
campoCabeloEl.addEventListener('change', alteraCabelo);
campoBandanaEl.addEventListener('change', alteraAcessorios);
campoLacinhosEl.addEventListener('change', alteraAcessorios);
campoOculosEl.addEventListener('change', alteraAcessorios);
botaoBaixarEl.addEventListener('click', html2canvas);
