(w => {
    let container = document.querySelector('.back_to_top')
    let containerVisible = false

    w.addEventListener('scroll', function () {
        if (w.scrollY > 200 && !containerVisible) {
            containerVisible = true
            container.style.visibility = 'visible'
            container.style.opacity = '1'
            container.style.transition = 'visibility 0.3s, opacity 0.3s'
        } else if (w.scrollY <= 200 && containerVisible) {
            containerVisible = false
            container.style.visibility = 'hidden'
            container.style.opacity = '0'
        }
    })

    container.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
})(window)
