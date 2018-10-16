((window, document) => {
    function getScrollOffset () {
        const navbarHeight = document.querySelector('#header').offsetHeight
        const mainContent = document.querySelector('#main_content')
        const style = window.getComputedStyle(mainContent)
        const paddingTop = parseInt(style.getPropertyValue('padding-top').replace(/[a-z]/g, ''))
        return -(navbarHeight + paddingTop)
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const target = document.querySelector(this.getAttribute('href'))
            const y = target.getBoundingClientRect().top + window.scrollY + getScrollOffset()
            window.scrollTo({
                top: y,
                behavior: "smooth"
            });
        })
    })

})(window, document)
