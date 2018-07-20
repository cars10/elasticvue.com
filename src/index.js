// Images for lead gallery
import DarkThumb from '../static/images/dark.png'
import DarkFullsize from '../static/images/dark_fullsize.png'
import LightThumb from '../static/images/light.png'
import LightFullsize from '../static/images/light_fullsize.png'
// Images for screenshot gallery
import Screenshot0 from '../static/images/screenshots/screenshot_0_connect_white.png'
import Screenshot1 from '../static/images/screenshots/screenshot_1_home_white.png'
import Screenshot2 from '../static/images/screenshots/screenshot_2_indices_white.png'
import Screenshot3 from '../static/images/screenshots/screenshot_3_index_white.png'
import Screenshot4 from '../static/images/screenshots/screenshot_4_index_dark.png'
import Screenshot5 from '../static/images/screenshots/screenshot_5_search_dark.png'
import Screenshot6 from '../static/images/screenshots/screenshot_6_query_dark.png'
import Screenshot7 from '../static/images/screenshots/screenshot_7_utilities_dark.png'
import Screenshot0Thumb from '../static/images/screenshots/screenshot_0_connect_white_thumb.png'
import Screenshot1Thumb from '../static/images/screenshots/screenshot_1_home_white_thumb.png'
import Screenshot2Thumb from '../static/images/screenshots/screenshot_2_indices_white_thumb.png'
import Screenshot3Thumb from '../static/images/screenshots/screenshot_3_index_white_thumb.png'
import Screenshot4Thumb from '../static/images/screenshots/screenshot_4_index_dark_thumb.png'
import Screenshot5Thumb from '../static/images/screenshots/screenshot_5_search_dark_thumb.png'
import Screenshot6Thumb from '../static/images/screenshots/screenshot_6_query_dark_thumb.png'
import Screenshot7Thumb from '../static/images/screenshots/screenshot_7_utilities_dark_thumb.png'
// Scripts
import './assets/scripts/resize_content'
import './assets/scripts/back_to_top'
import './assets/scripts/fancy_header'
import './assets/scripts/copyable'
import SimpleGallery from './assets/scripts/gallery'
// Styles
import './assets/stylesheets/style.scss'


new SimpleGallery({
    gallerySelector: '#lead_gallery',
    thumbnailClasses: ['gallery__thumb'],
    images: [
        {
            src: LightThumb,
            fullSizeSrc: LightFullsize,
            alt: 'Light screenshot',
            wrapperClasses: ['image_overlap__base']
        },
        {
            src: DarkThumb,
            fullSizeSrc: DarkFullsize,
            alt: 'Dark screenshot',
            wrapperClasses: ['image_overlap__overlap']
        }
    ]
})

new SimpleGallery({
    gallerySelector: '#screenshot_gallery',
    thumbnailClasses: ['gallery__thumb'],
    images: [
        {
            src: Screenshot0Thumb,
            fullSizeSrc: Screenshot0,
            alt: 'screenshot 0',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot1Thumb,
            fullSizeSrc: Screenshot1,
            alt: 'screenshot 1',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot2Thumb,
            fullSizeSrc: Screenshot2,
            alt: 'screenshot 2',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot3Thumb,
            fullSizeSrc: Screenshot3,
            alt: 'screenshot 3',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot4Thumb,
            fullSizeSrc: Screenshot4,
            alt: 'screenshot 4',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot5Thumb,
            fullSizeSrc: Screenshot5,
            alt: 'screenshot 5',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot6Thumb,
            fullSizeSrc: Screenshot6,
            alt: 'screenshot 6',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        },
        {
            src: Screenshot7Thumb,
            fullSizeSrc: Screenshot7,
            alt: 'screenshot 7',
            wrapperClasses: ['column', 'is-one-quarter-desktop', 'is-one-third-tablet', 'is-half-mobile']
        }
    ]
})

let nav = document.querySelector('#navigation')
document.querySelector('#navbar_toggle').addEventListener('click', function () {
    if (nav.classList.contains('navigation--open')) {
        nav.classList.remove('navigation--open')
    } else {
        nav.classList.add('navigation--open')
    }
})
document.querySelectorAll('.navigation__link').forEach(function (link) {
    link.addEventListener('click', function () {
        console.log('click')
        nav.classList.remove('navigation--open')
    })
})

document.getElementById('current_year').innerHTML = new Date().getFullYear()
