import './assets/scripts/back_to_top'
import './assets/scripts/copyable'
import './assets/scripts/detect_ie'
import './assets/scripts/fancy_header'
import './assets/scripts/feature_swap'
import './assets/scripts/hamburger'
import './assets/scripts/smooth_anchor'
import './assets/scripts/gallery'

import './assets/stylesheets/style.scss'

document.getElementById('current_year').innerHTML = new Date().getFullYear().toString()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
