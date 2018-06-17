import './assets/stylesheets/style.scss'
import './assets/scripts/back_to_top'
import SimpleGallery from './assets/scripts/gallery'

document.getElementById('current_year').innerHTML = new Date().getFullYear()

new SimpleGallery('#gallery')