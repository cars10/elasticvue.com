((window, document) => {
    function selectText(element) {
        const selection = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(element)
        selection.removeAllRanges()
        selection.addRange(range)
    }

    document.querySelectorAll('.selectable').forEach(element => {
        element.addEventListener('click', () => {
            if (!!element.getAttribute('data-clicked')) {
                try {
                    selectText(element)
                } catch (e) {
                }
            } else {
                element.setAttribute('data-clicked', 'true')
                setTimeout(() => {
                    element.removeAttribute('data-clicked')
                }, 400)
            }
        })

        element.setAttribute('title', 'double-click to select')
    })
})(window, document)
