window.addEventListener('scroll', function(){
    let header = document.querySelector ('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function abrirModal() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')
}