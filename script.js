const LINK_MENU = document.querySelectorAll('.li-tamanho')
const CONTAINER_MENU = document.querySelector('.container-menu')
const RES_CABECALHO = document.querySelector('.conteudo-cabecalho')

CONTAINER_MENU.addEventListener('mouseenter', deixaLinkTransparente)
CONTAINER_MENU.addEventListener('mouseleave', deixaTodosOsLinksVisiveis)

LINK_MENU.forEach(hover => {
    hover.addEventListener('mouseenter', deixaLinkVisivel)
    hover.addEventListener('mouseout', deixaLinkTransparente)
});

function deixaLinkTransparente() { 
   LINK_MENU.forEach(link => {
       link.style.opacity = '0.5'
   }) 
}

function deixaTodosOsLinksVisiveis() {
    LINK_MENU.forEach(link => {
        link.style.opacity = '1'
    }) 
    removeConteudo() 
}

function deixaLinkVisivel() {
    this.style.opacity = '1'
    mostraConteudo(this)
}

function mostraConteudo(conteudo) {
    console.log(conteudo)
    if (conteudo.id == 'pagina-inicial') {
        RES_CABECALHO.innerHTML = 'nice'
    } 
    else if(conteudo.id == 'para-voce') {
        RES_CABECALHO.innerHTML = '<div class="cartao"></div>'
        setTimeout(adicionaAnimacao, 10)
        setTimeout(adicionaAnimacaoDosConteudos, 20)
    }
}

function adicionaAnimacao() {
    let car = document.querySelector('.cartao')
    car.classList.add('animacao')
    car.innerHTML = '<p class="p">CARTÃO</p>'
}

function adicionaAnimacaoDosConteudos() {
    let p =  document.querySelector('.p')
    p.classList.add('animacao')
}

function removeConteudo() {
    RES_CABECALHO.innerHTML = ''
}