(document => {
    const nav = document.querySelector('#navigation')
    const toggle = document.querySelector('#navbar_toggle')
    toggle.addEventListener('click', function () {
        if (nav.classList.contains('navigation--open')) {
            nav.classList.remove('navigation--open')
        } else {
            nav.classList.add('navigation--open')
        }
    })
    toggle.addEventListener('blur', function () {
        nav.classList.remove('navigation--open')
    })
})(document)
