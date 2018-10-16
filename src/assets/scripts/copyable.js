(() => {
    document.querySelectorAll('.copyable').forEach(element => {
        element.addEventListener('click', (e) => {
            try {
                copyToClipboard(element)
                showToast(e, 'Copied to clipboard')
            } catch (e) {
                showToast(e, 'Could not copy', 'error')
            }
        })

        element.setAttribute('title', 'Click to copy')
    })
})()

function copyToClipboard (element) {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    selection.removeAllRanges()
}

function showToast (e, msg, type) {
    if (!type) type = 'success'
    const toast = document.createElement('div')
    toast.classList.add('copyable-toast')
    if (type === 'success') toast.classList.add('copyable-toast--success')
    document.body.append(toast)
    toast.style.left = e.clientX + 'px'
    toast.style.top = e.clientY - 30 + 'px'
    toast.innerHTML = msg

    setTimeout(() => {
        toast.style.opacity = '0'
        setTimeout(() => {
            document.body.removeChild(toast)
        }, 1000)
    }, 750)
}