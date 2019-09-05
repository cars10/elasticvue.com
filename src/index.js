// Images for lead gallery
import DarkFullsize from '../static/images/dark.jpg'
import LightFullsize from '../static/images/light.jpg'
// Images for screenshot gallery
import Screenshot0 from '../static/images/screenshots/screenshot_0_home_white.jpg'
import Screenshot1 from '../static/images/screenshots/screenshot_1_nodes.jpg'
import Screenshot2 from '../static/images/screenshots/screenshot_2_indices.jpg'
import Screenshot3 from '../static/images/screenshots/screenshot_3_index.jpg'
import Screenshot4 from '../static/images/screenshots/screenshot_4_search_dark.jpg'
import Screenshot5 from '../static/images/screenshots/screenshot_5_query_dark.jpg'
import Screenshot6 from '../static/images/screenshots/screenshot_6_snapshots_dark.jpg'
import Screenshot7 from '../static/images/screenshots/screenshot_7_utilities_dark.jpg'
import Screenshot0Thumb from '../static/images/screenshots/screenshot_0_home_white_thumb.jpg'
import Screenshot1Thumb from '../static/images/screenshots/screenshot_1_nodes_thumb.jpg'
import Screenshot2Thumb from '../static/images/screenshots/screenshot_2_indices_thumb.jpg'
import Screenshot3Thumb from '../static/images/screenshots/screenshot_3_index_thumb.jpg'
import Screenshot4Thumb from '../static/images/screenshots/screenshot_4_search_dark_thumb.jpg'
import Screenshot5Thumb from '../static/images/screenshots/screenshot_5_query_dark_thumb.jpg'
import Screenshot6Thumb from '../static/images/screenshots/screenshot_6_snapshots_dark_thumb.jpg'
import Screenshot7Thumb from '../static/images/screenshots/screenshot_7_utilities_dark_thumb.jpg'
// Scripts
import './assets/scripts/back_to_top'
import './assets/scripts/copyable'
import './assets/scripts/detect_ie'
import './assets/scripts/fancy_header'
import './assets/scripts/feature_swap'
import './assets/scripts/hamburger'
import './assets/scripts/smooth_anchor'
import SimpleGallery from './assets/scripts/gallery'
// Styles
import './assets/stylesheets/style.scss'


new SimpleGallery({
  gallerySelector: '#lead_gallery',
  thumbnailClasses: ['gallery__thumb'],
  images: [
    {
      src: LightFullsize,
      fullSizeSrc: LightFullsize,
      alt: 'Light screenshot',
      wrapperClasses: ['image_overlap__base']
    },
    {
      src: DarkFullsize,
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

document.getElementById('current_year').innerHTML = new Date().getFullYear().toString()
