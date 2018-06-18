function getNextIndex (length, index) {
    let newIndex = index + 1
    if (newIndex < length && newIndex >= 0) {
        return newIndex
    } else {
        return 0
    }
}

function getPreviousIndex (length, index) {
    let newIndex = index - 1
    if (newIndex < length && newIndex >= 0) {
        return newIndex
    } else {
        return length
    }
}

export default function SimpleGallery (galleryId) {
    this.currentImageIndex = 0
    this.gallery = document.querySelector(galleryId)
    this.images = Array.from(document.querySelectorAll(galleryId + ' .gallery__image'))
    this.galleryModal = null
    this.galleryModalBackdrop = null
    this.galleryImage = null
    this.galleryOpen = false

    this.setup()
}

SimpleGallery.prototype.setup = function () {
    this.buildGalleryModalHtml()
    this.addImageEventListeners()
    this.addBackdropEventListener()
    this.addGalleryModalImgEventListener()
}

SimpleGallery.prototype.setupGalleryTransitions = function () {
    this.galleryModal.style.transition = 'opacity 0.3s, visibility 0.3s'
    this.galleryModalBackdrop.style.transition = 'opacity 0.3s, visibility 0.3s'
}

SimpleGallery.prototype.addImageEventListeners = function () {
    for (let image of this.images) {
        image.addEventListener('click', () => {
            this.openGallery()
            this.loadImage(this.images.indexOf(image))
            this.setupGalleryTransitions()
        })
    }
}

SimpleGallery.prototype.buildGalleryModalHtml = function () {
    let galleryModal = document.createElement('div')
    galleryModal.classList.add('gallery__modal')
    this.gallery.appendChild(galleryModal)
    this.galleryModal = galleryModal

    let galleryModalBackdrop = document.createElement('div')
    galleryModalBackdrop.classList.add('gallery__modal__backdrop')
    this.gallery.appendChild(galleryModalBackdrop)
    this.galleryModalBackdrop = galleryModalBackdrop

    let galleryImage = document.createElement('img')
    this.galleryModal.appendChild(galleryImage)
    this.galleryImage = galleryImage
}

SimpleGallery.prototype.addGalleryModalImgEventListener = function () {
    this.galleryImage.addEventListener('click', () => {
        this.loadNextImage()
    })

    document.addEventListener('keydown', (e) => {
        if (this.galleryOpen) {
            if (e.keyCode === 27) { // esc
                this.closeGallery()
            } else if (e.keyCode === 39) { // right
                this.loadNextImage()
            } else if (e.keyCode === 37) { // left
                this.loadPreviousImage()
            }
        }
    })
}

SimpleGallery.prototype.loadNextImage = function () {
    this.currentImageIndex = getNextIndex(this.images.length, this.currentImageIndex)
    this.loadImage(this.currentImageIndex)
}

SimpleGallery.prototype.loadPreviousImage = function () {
    this.currentImageIndex = getPreviousIndex(this.images.length, this.currentImageIndex)
    this.loadImage(this.currentImageIndex)
}

SimpleGallery.prototype.loadImage = function (index) {
    let image = this.images[index]
    this.galleryImage.setAttribute('src', image.getAttribute('src'))
}

SimpleGallery.prototype.addBackdropEventListener = function () {
    this.galleryModalBackdrop.addEventListener('click', () => {
        this.closeGallery()
    })
}

SimpleGallery.prototype.openGallery = function () {
    this.gallery.classList.add('gallery--visible')
    this.galleryOpen = true
}

SimpleGallery.prototype.closeGallery = function () {
    this.gallery.classList.remove('gallery--visible')
    this.galleryOpen = false
}
