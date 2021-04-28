const botao = document.querySelector('.BotaoSetinha')
const seta = document.querySelector('.BotaoSetinha i')
const barra = document.querySelector('.BarraDeCima')
const input = document.querySelector('.InputElement')
const lupa = document.querySelector('#Lupa')

lupa.addEventListener('click', function (e) {
    window.location.href = `http://google.com/search?q=${input.value}`
})

input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        window.location.href = `http://google.com/search?q=${this.value}`
    }
})

botao.addEventListener('click', function () {
    if (botao.classList.contains('clicado')) {
        barra.style.transform = "translateY(-4px)"
        seta.style.transform = "rotate(360deg) translateY(0px)"
        botao.classList.remove('clicado')
    } else {
        barra.style.transform = "translateY(50px)"
        seta.style.transform = "rotate(180deg) translateY(2px)"
        botao.classList.add('clicado')
    }
})