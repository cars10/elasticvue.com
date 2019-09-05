let featureChrome = document.getElementById('feature_chrome_extension')
let featureFirefox = document.getElementById('feature_firefox_addon')

if (featureChrome && featureFirefox) {
  let isFirefox = /firefox/i.test(navigator.userAgent)

  if (isFirefox) {
    featureChrome.classList.add('is-hidden')
  } else {
    featureFirefox.classList.add('is-hidden')
  }

  let show_chrome_extension = document.getElementById('show_chrome_extension')
  if (show_chrome_extension) {
    show_chrome_extension.addEventListener('click', () => {
      featureChrome.classList.remove('is-hidden')
      featureFirefox.classList.add('is-hidden')
    })
  }

  let show_firefox_addon = document.getElementById('show_firefox_addon')
  if (show_firefox_addon) {
    show_firefox_addon.addEventListener('click', () => {
      featureChrome.classList.add('is-hidden')
      featureFirefox.classList.remove('is-hidden')
    })
  }
}
