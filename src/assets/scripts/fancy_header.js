let scrollOffset = 50
let header = document.getElementById('header')

window.addEventListener('scroll', function () {
    let scrollPosition = window.pageYOffset
    if (scrollPosition >= scrollOffset) {
        header.classList.add('header--animated')
        header.classList.remove('header--fancy')
    } else {
        header.classList.add('header--fancy')
    }
})