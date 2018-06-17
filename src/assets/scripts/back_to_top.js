var container = document.querySelector('.back_to_top')
var containerVisible = false

window.addEventListener('scroll', function() {
    if (window.scrollY > 200 && !containerVisible) {
        containerVisible = true
        container.style.visibility = 'visible'
        container.style.opacity = '1'
    } else if (window.scrollY <= 200 && containerVisible) {
        containerVisible = false
        container.style.visibility = 'hidden'
        container.style.opacity = '0'
    }
})