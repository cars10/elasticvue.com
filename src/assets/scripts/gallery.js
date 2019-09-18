function getNextIndex (length, index) {
  let newIndex = index + 1
  return newIndex < length && newIndex >= 0 ? newIndex : 0
}

function getPreviousIndex (length, index) {
  let newIndex = index - 1
  return newIndex < length && newIndex >= 0 ? newIndex : length - 1
}

/**
 * SimpleGallery
 *
 * @param options:
 *  gallerySelector: '#some_id'
 *  thumbnailClasses: ['class1', 'class2']
 *  images: [
 *      {
 *          src: 'path/image.png',
 *          fullSizeSrc: 'path/image_full.png',
 *          alt: 'My image',
 *          wrapperClasses: ['wrapperClass1', 'wrapperClass2']
 *      }
 *  ]
 * @constructor
 */
export default function SimpleGallery (options) {
  this.currentImageIndex = 0
  this.gallery = document.querySelector(options.gallerySelector)
  this.images = options.images
  this.thumbnailClasses = options.thumbnailClasses

  this.galleryModal = null
  this.galleryModalBackdrop = null
  this.galleryImage = null
  this.prevImageCtrl = null
  this.nextImageCtrl = null
  this.galleryOpen = false

  if (!this.gallery) return
  this.setup()
}

SimpleGallery.prototype.setup = function () {
  this.setupGallery()
  this.setupModal()
}

SimpleGallery.prototype.setupGallery = function () {
  this.images.forEach((image) => {
    let imgHtml = this.buildImageHtml(image)
    this.addImageEventListeners(imgHtml)
  })
}

SimpleGallery.prototype.setupModal = function () {
  this.buildGalleryModalHtml()
  this.addBackdropEventListener()
  this.addControlEventListeners()
  this.addGalleryModalImgEventListener()
}

SimpleGallery.prototype.setupGalleryTransitions = function () {
  this.galleryModal.style.transition = 'opacity 0.3s, visibility 0.3s'
  this.galleryModalBackdrop.style.transition = 'opacity 0.3s, visibility 0.3s'
}

SimpleGallery.prototype.buildImageHtml = function (image) {
  let imgHtml = document.createElement('img')
  if (this.thumbnailClasses) {
    this.thumbnailClasses.forEach(function (className) {
      imgHtml.classList.add(className)
    })
  }
  if (image.src) imgHtml.setAttribute('src', image.src)
  if (image.alt) imgHtml.setAttribute('alt', image.alt)
  imgHtml.setAttribute('data-index', this.images.indexOf(image))

  let wrapperClasses = ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
  let wrapper = document.createElement('div')
  wrapperClasses.forEach(function (className) {
    wrapper.classList.add(className)
  })
  wrapper.appendChild(imgHtml)
  this.gallery.appendChild(wrapper)
  return imgHtml
}

SimpleGallery.prototype.addImageEventListeners = function (imgHtml) {
  imgHtml.addEventListener('click', () => {
    this.openGallery()
    let index = parseInt(imgHtml.getAttribute('data-index'))
    this.loadImage(index)
    this.setupGalleryTransitions()
  })
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

  if (this.images.length > 1) {
    let prevImageCtrl = document.createElement('div')
    prevImageCtrl.classList.add('gallery__modal__controls__prev')
    prevImageCtrl.innerHTML = '&#8249;'
    this.galleryModal.appendChild(prevImageCtrl)
    this.prevImageCtrl = prevImageCtrl

    let nextImageCtrl = document.createElement('div')
    nextImageCtrl.classList.add('gallery__modal__controls__next')
    nextImageCtrl.innerHTML = '&#8250;'
    this.galleryModal.appendChild(nextImageCtrl)
    this.nextImageCtrl = nextImageCtrl
  }

  let galleryImage = document.createElement('img')
  this.galleryModal.appendChild(galleryImage)
  this.galleryImage = galleryImage
}

SimpleGallery.prototype.addControlEventListeners = function () {
  if (this.images.length > 1) {
    this.prevImageCtrl.addEventListener('click', () => {
      this.loadPreviousImage()
    })

    this.nextImageCtrl.addEventListener('click', () => {
      this.loadNextImage()
    })
  }
}

SimpleGallery.prototype.addGalleryModalImgEventListener = function () {
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
  this.currentImageIndex = index
  let src = image.fullSizeSrc || image.src
  this.galleryImage.setAttribute('src', src)
  this.galleryImage.setAttribute('alt', image.alt)
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
