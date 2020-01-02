import './assets/scripts/back_to_top'
import './assets/scripts/selectable'
import './assets/scripts/detect_ie'
import './assets/scripts/feature_swap'
import './assets/scripts/hamburger'
import './assets/scripts/gallery'

import './assets/stylesheets/style.scss'

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(() => {
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}
