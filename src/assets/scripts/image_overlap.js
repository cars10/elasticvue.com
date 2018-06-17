const imageOverlapBase = 'image_overlap__base'
const imageOverlapOverlap = 'image_overlap__overlap'

export default function ImageOverlap(selector) {
    this.base = document.querySelector(selector + ' .image_overlap__base')
    this.overlap = document.querySelector(selector + ' .image_overlap__overlap')
    console.log(this.overlap)
    this.setup()
}

ImageOverlap.prototype.setup = function () {
    this.base.addEventListener('click', () => {
        if (this.base.classList.contains(imageOverlapBase)) {
            this.base.classList.add(imageOverlapOverlap)
            this.overlap.classList.add(imageOverlapBase)

            this.base.classList.remove(imageOverlapBase)
            this.overlap.classList.remove(imageOverlapOverlap)
        }
    })

    this.overlap.addEventListener('click', () => {
        if (this.overlap.classList.contains(imageOverlapBase)) {
            this.overlap.classList.add(imageOverlapOverlap)
            this.base.classList.add(imageOverlapBase)

            this.overlap.classList.remove(imageOverlapBase)
            this.base.classList.remove(imageOverlapOverlap)
        }
    })
}
