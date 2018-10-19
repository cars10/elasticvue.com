(window => {
    function maximiseContents () {
        if (window.outerWidth > 1024) {
            const height = window.innerHeight
            const initialHeight = 800
            const maxHeight = 1400
            if (height > initialHeight && height < maxHeight) {
                setContentHeight(height)
            } else {
                setContentHeight(null)
            }
        }
    }

    function setContentHeight (height) {
        const navbarHeight = 80
        const content = document.querySelector('#main_content')
        if (height === null) {
            content.style.height = null
        } else {
            content.style.height = height - navbarHeight + 'px'
        }
    }

    window.addEventListener('load', function () {
        maximiseContents()
    })

    window.addEventListener('resize', function () {
        maximiseContents()
    })
})(window)

