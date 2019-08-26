(document => {
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
      nav.classList.remove('navigation--open')
    })
  })
})(document)
