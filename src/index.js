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

import './assets/scripts/back_to_top'
import './assets/scripts/copyable'
import './assets/scripts/detect_ie'
import './assets/scripts/fancy_header'
import './assets/scripts/feature_swap'
import './assets/scripts/hamburger'
import './assets/scripts/smooth_anchor'
import SimpleGallery from './assets/scripts/gallery'

import './assets/stylesheets/style.scss'


new SimpleGallery({
  gallerySelector: '#lead_gallery',
  thumbnailClasses: ['gallery__thumb'],
  images: [
    {
      src: Screenshot4Thumb,
      fullSizeSrc: Screenshot4,
      alt: 'Dark screenshot'
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
      alt: 'screenshot 0'
    },
    {
      src: Screenshot1Thumb,
      fullSizeSrc: Screenshot1,
      alt: 'screenshot 1'
    },
    {
      src: Screenshot2Thumb,
      fullSizeSrc: Screenshot2,
      alt: 'screenshot 2'
    },
    {
      src: Screenshot3Thumb,
      fullSizeSrc: Screenshot3,
      alt: 'screenshot 3'
    },
    {
      src: Screenshot4Thumb,
      fullSizeSrc: Screenshot4,
      alt: 'screenshot 4'
    },
    {
      src: Screenshot5Thumb,
      fullSizeSrc: Screenshot5,
      alt: 'screenshot 5'
    },
    {
      src: Screenshot6Thumb,
      fullSizeSrc: Screenshot6,
      alt: 'screenshot 6'
    },
    {
      src: Screenshot7Thumb,
      fullSizeSrc: Screenshot7,
      alt: 'screenshot 7'
    }
  ]
})

document.getElementById('current_year').innerHTML = new Date().getFullYear().toString()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
