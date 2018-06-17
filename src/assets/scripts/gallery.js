function getNextIndex (length, index) {
    let newIndex = index + 1
    if (newIndex < length) {
        return newIndex
    } else {
        return 0
    }
}

export default function SimpleGallery (galleryId) {
    this.currentImageIndex = 0
    this.gallery = document.querySelector(galleryId)
    this.images = Array.from(document.querySelectorAll(galleryId + ' .gallery__image'))
    this.galleryModal = document.querySelector(galleryId + ' .gallery__modal')
    this.galleryModalBackdrop = document.querySelector(galleryId + ' .gallery__modal__backdrop')
    this.galleryImage = null

    this.setup()
}

SimpleGallery.prototype.setup = function () {
    this.addImageEventListeners()
    this.addBackdropEventListener()
    this.buildGalleryModalImg()
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

SimpleGallery.prototype.buildGalleryModalImg = function () {
    let galleryImage = document.createElement('img')
    this.galleryModal.appendChild(galleryImage)
    this.galleryImage = galleryImage
}

SimpleGallery.prototype.addGalleryModalImgEventListener = function () {
    this.galleryImage.addEventListener('click', () => {
        this.loadNextImage()
    })

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            this.closeGallery()
        }
    })
}

SimpleGallery.prototype.loadNextImage = function () {
    this.currentImageIndex = getNextIndex(this.images.length, this.currentImageIndex)
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
}

SimpleGallery.prototype.closeGallery = function () {
    this.gallery.classList.remove('gallery--visible')
}
