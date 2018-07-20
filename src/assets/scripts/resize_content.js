function maximiseContents () {
    if (window.outerWidth > 1024) {
        const height = window.outerHeight
        const initialHeight = 800
        const maxHeight = 1400
        if (height > initialHeight) {
            const heightToSet = height < maxHeight ? height : maxHeight
            setContentHeight(heightToSet)
        } else {
            setContentHeight(null)
        }

    }
}

function setContentHeight (height) {
    const navbarHeight = 80
    const content = document.querySelector('#main_content')
    if (height !== null) {
        content.style.height = height - navbarHeight + 'px'
    } else {
        content.style.height = null
    }
}

window.addEventListener('load', function () {
    maximiseContents()
})

window.addEventListener('resize', function () {
    maximiseContents()
})